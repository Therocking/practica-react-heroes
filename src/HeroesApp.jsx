import { AuthProvider } from './auth'
import { AppRouter } from './routes/AppRouter'

// Herramientas Utilizadas//
// -query-string ( Doc. en npm).
// -react-router-dom ( Doc en react-router-dom ).

export const HeroesApp = () => {
  return (
    <AuthProvider>

      <AppRouter/>

    </AuthProvider>
  )
}
