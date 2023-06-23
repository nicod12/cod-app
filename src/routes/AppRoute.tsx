import { Route, Routes } from 'react-router-dom'
import { AboutPage, GamesPage, HomePage } from '../pages';


const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='about' element={<AboutPage />} />
        <Route path='games' element={<GamesPage />} />
        
        <Route path='*' element={<h2>404 not Found</h2>} />
    </Routes>
  )
}

export default AppRoutes;

