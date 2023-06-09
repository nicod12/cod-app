import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/home'


const AppRoutes = () => {
  return (
    <Routes>
        <Route index element={<HomePage />} />
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<h2>404 not Found</h2>} />
    </Routes>
  )
}

export default AppRoutes;