import {NavLink, Link} from "react-router-dom";
import {WriteToUsButton} from "../Buttons/WriteToUsButton.tsx";

const scrollToTop = () => window.scrollTo({top: 0, behavior: 'smooth'})

const Header = () => {
    return (
        <header className="mx-auto max-w-[1440px] border border-white hidden sm:block bg-blue-100 bg-opacity-20 backdrop-blur-[30px]
        rounded-[100px] fixed top-0 w-full z-40 px-8 py-4">
            <nav className="flex flex-row items-center w-full justify-between">
                <div className="flex gap-4">
                    <div className="">
                    <NavLink to={'/contacts'} onClick={scrollToTop} className="header_link">
                        CONTACTS
                    </NavLink>
                    </div>
                    <NavLink to={'/policies'} onClick={scrollToTop} className="header_link">
                        POLICIES
                    </NavLink>
                </div>
                <Link to={'/'} onClick={scrollToTop}
                      className="cursor-pointer w-[170.58px] h-4 bg-[url('/images/Smart-choice.svg')] bg-center bg-cover my-3.5"/>
                <div>
                    <WriteToUsButton/>
                </div>
            </nav>
        </header>
    );
};

export default Header;

