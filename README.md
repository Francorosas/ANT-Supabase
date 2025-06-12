# Dice Roller App con Supabase

¡Bienvenido a la aplicación de lanzamiento de dados! Esta aplicación te permite lanzar un dado virtual y guardar el historial de tus lanzamientos usando Supabase como backend.

## 📋 Requisitos Previos

Para ejecutar este proyecto necesitas tener instalado:

- Node.js (recomendado v18 o superior)
- npm (viene incluido con Node.js)
- Git

## 🚀 Instalación y Ejecución

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/Francorosas/ANT-Supabase.git
   cd ANT-Supabase
   ```

2. **Instalar las dependencias**
   ```bash
   npm install
   ```

3. **Configurar Supabase**
   Para que la aplicación funcione, necesitas crear una cuenta en Supabase (https://supabase.com) y obtener las credenciales de tu proyecto:
   - URL del proyecto
   - Clave anónima (anon key)

   Estas credenciales se deben configurar en el archivo `src/lib/supabase.ts`:
   ```typescript
   const supabaseUrl = 'TU_URL_SUPABASE'
   const supabaseAnonKey = 'TU_CLAVE_ANONIMA'
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

   La aplicación se iniciará en `http://localhost:5173/` por defecto.

## 🎮 Uso de la Aplicación

1. **Iniciar Sesión**
   - La primera vez que abras la aplicación, verás un formulario de inicio de sesión.
   - Si no tienes una cuenta, crea una usando el botón "Sign Up".
   - Si ya tienes una cuenta, ingresa tu correo y contraseña.

2. **Lanzar el Dado**
   - Una vez autenticado, verás el dado y el botón "Roll Dice".
   - Haz clic en el botón para lanzar el dado.
   - El dado girará y mostrará un número aleatorio del 1 al 6.

3. **Ver el Historial**
   - Cada lanzamiento se guarda automáticamente.
   - Puedes ver los últimos 10 lanzamientos en la sección de historial.
   - Cada entrada muestra el valor del dado y la fecha/hora del lanzamiento.

## 🛠️ Tecnologías Utilizadas

- React con TypeScript
- Vite como bundler
- Supabase para el backend
- Edge Functions de Supabase para el lanzamiento del dado

## 📝 Notas Importantes

- El historial de lanzamientos se guarda en tu cuenta de Supabase.
- Mantén seguras tus credenciales de Supabase.
- La aplicación usa Edge Functions de Supabase para generar números aleatorios de forma segura.