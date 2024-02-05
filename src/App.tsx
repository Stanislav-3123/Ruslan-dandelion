import Wrapper from "./components/wrapper";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.tsx";

function App() {


    return (
        <Wrapper>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <Footer/>
        </Wrapper>
    )
}

export default App
