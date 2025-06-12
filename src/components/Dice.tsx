import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import type { DiceRoll } from '../lib/supabase'

export function Dice() {
  const [diceValue, setDiceValue] = useState(1)
  const [rolling, setRolling] = useState(false)
  const [history, setHistory] = useState<DiceRoll[]>([])
  const [user, setUser] = useState(supabase.auth.getUser())

  const diceImage = `/images/cara${diceValue}.webp`

  useEffect(() => {
    loadHistory()
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user)
        loadHistory()
      } else {
        setUser(null)
        setHistory([])
      }
    })
    return () => subscription.unsubscribe()
  }, [])

  const loadHistory = async () => {
    const { data: rolls, error } = await supabase
      .from('dice_rolls')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(10)

    if (error) {
      console.error('Error loading history:', error)
      return
    }

    setHistory(rolls || [])
  }

  const rollDice = async () => {
    if (rolling || !user) return

    setRolling(true)
    
    try {
      const response = await fetch('https://pscsittwrgivsgaedevh.supabase.co/functions/v1/roll-dice', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${(await supabase.auth.getSession()).data.session?.access_token}`
        }
      })
      
      const { value } = await response.json()
      setDiceValue(value)
      await loadHistory()
    } catch (error) {
      console.error('Error rolling dice:', error)
    } finally {
      setRolling(false)
    }
  }

  if (!user) {
    return <div>Please sign in to roll the dice</div>
  }

  return (
    <div className="dice-container">
      <div className={`dice ${rolling ? 'rolling' : ''}`} onClick={rollDice} style={{ backgroundImage: `url(${diceImage})` }}>
      </div>
      <button onClick={rollDice} disabled={rolling}>
        {rolling ? 'Rolling...' : 'Roll Dice'}
      </button>
      <div className="history">
        <h2>History</h2>
        <ul>
          {history.map((roll) => (
            <li key={roll.id}>
              Rolled a {roll.value} at {new Date(roll.created_at).toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
