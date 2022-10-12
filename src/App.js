import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home/home.component'
import Navabar from './routes/navigation/navigation.component'
import SignIN from './routes/sign-in/sign-in.componnet'


const Shop = () => {
  return (
    <h1> I am the shop Category</h1>
  )
}

const App = () => {
 return (
  <Routes>
  <Route path='/' element={ <Navabar/>}>
    <Route index element={<Home/>}/> 
    <Route path='shop' element={<Shop/>}/> 
    <Route path='sign-in' element={<SignIN/>}/> 
  </Route>
</Routes>
 )
};

export default App;
