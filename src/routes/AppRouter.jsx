import { Route, Routes } from 'react-router-dom'
import { Loginpage } from '../auth'
import { PrivateRoute, PublicRoute } from './'
import { HeroesRouter } from '../heroes/routes/HeroesRouter'

export const AppRouter = () => {
  return (
    <Routes>

        <Route path='login/*' element={
          <PublicRoute>

            <Routes>
             <Route path='/*' element={<Loginpage/>}/> 
            </Routes>

          </PublicRoute>
        } />

        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRouter/>
          </PrivateRoute>
        } />

        {/* // <Route path='login' element={<Loginpage/>}/> */}
        {/* <Route path='/*' element={<HeroesRouter/>}/> */}
    </Routes>
  )
}
