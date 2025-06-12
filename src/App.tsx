import { useState, useEffect } from 'react'
import { Auth } from './components/Auth'
import { Dice } from './components/Dice'
import { supabase } from './lib/supabase'
import './App.css'

function App() {
  const [session, setSession] = useState(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  return (
    <div className="App">
      <header>
        <h1>Dice Roller App</h1>
        {session && (
          <button onClick={() => supabase.auth.signOut()}>
            Sign Out
          </button>
        )}
      </header>
      <main>
        {!session ? <Auth /> : <Dice />}
      </main>
    </div>
  )
}

export default App
