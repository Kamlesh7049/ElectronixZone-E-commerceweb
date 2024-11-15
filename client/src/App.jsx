import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashboard from "./admin/AdminDashboard";
// import Header from './components/Header'

const App = () => {
  return (
  
    <>
    {/* <h1>Welcom E-commerceWeb!!!</h1> */}
    {/* <Header/> */}

    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/> }/>     
          </Route>
        </Routes>
        <Routes>
           <Route path="/admin" element={<AdminDashboard/>} >
           
           </Route>
        </Routes>
     </BrowserRouter>

    </>
  )
}

export default App