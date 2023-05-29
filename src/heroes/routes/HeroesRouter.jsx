import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelPage, DcPage, HeroPage, Search } from '../../heroes/pages'
import { NavBar } from '../../ui/components/NavBar'

export const HeroesRouter = () => {
  return (
    <>
      <NavBar/>
      <div className='container'>
        <Routes>
            <Route path='/marvel' element={<MarvelPage/>}/>
            <Route path='/dc' element={<DcPage/>}/>

            <Route path='/hero/:id' element={<HeroPage/>}/>
            <Route path='/search' element={<Search/>}/>

            <Route path='/' element={<Navigate to={'/marvel'} />}/>
        </Routes>
      </div>
    </>
  )
}
