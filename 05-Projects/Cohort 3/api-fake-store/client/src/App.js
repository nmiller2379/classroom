import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Jewlery from "./pages/Jewlery";
import WomenClothing from "./pages/WomenClths";
import Electronics from "./pages/Electronics";
import Home from "./pages/Home";
import ViewProduct from "./pages/ViewProduct";
import ViewElectronicProduct from "./pages/viewElectronicProd";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
    <div className="App">
            <Router>

                <Navbar />
            
                <Routes>
                <Route path='/' element={<Home/>}/>
                   <Route path='/jewlery' element={<Jewlery/>}/>
                   <Route path='/womensClothing' element={<WomenClothing/>}/>
                   <Route path='/electronics' element={<Electronics/>}/>
                   <Route path='/jewlery/:id' element={<ViewProduct/>}/>
                   {/* created a path for the product to be viewed by calling the param id (fake API) */}
                   <Route path='/electronics/:id' element={<ViewElectronicProduct/>}/>
                   {/* this path is for the DummyJson electronics Page using param id*/}
                </Routes >
                <Footer />
           </Router>
    </div>
    );
}

export default App;