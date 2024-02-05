import Wrapper from "./components/wrapper";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import MobileHeader from "./components/MobileHeaer/MobileHeader.tsx";
import Cookies from "./components/Cookies/Cookies.tsx";

function App() {


    return (
        <Wrapper>
            <Cookies/>
            <MobileHeader/>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
            <Footer/>
        </Wrapper>
    )
}

export default App
