import {Link} from "react-scroll";
import {useEffect, useState} from "react";

const NavTabsMobile = () => {
    const [isActiveFirst, setIsActiveFirst] = useState<boolean>(false)
    const [isActiveSecond, setIsActiveSecond] = useState<boolean>(false)
    const [isActiveThird, setIsActiveThird] = useState<boolean>(false)
    const [isActiveFourth, setIsActiveFourth] = useState<boolean>(false)
    const [isVisibleNavTabs, setIsVisibleNavTabs] = useState<boolean>(true)
    const handleLinkFirst = () => {
        if (window.scrollY >= 500 && window.scrollY < 1200) {
            setIsVisibleNavTabs(true)
            setIsActiveFirst(true);
            setIsActiveSecond(false)
            setIsActiveThird(false)
            setIsActiveFourth(false)
        } else if (window.scrollY >= 1200 && window.scrollY < 1700) {
            setIsVisibleNavTabs(true)
            setIsActiveFirst(false);
            setIsActiveSecond(true)
            setIsActiveThird(false)
            setIsActiveFourth(false)
        } else if (window.scrollY >= 1700 && window.scrollY < 4400) {
            setIsVisibleNavTabs(true)
            setIsActiveFirst(false);
            setIsActiveSecond(false)
            setIsActiveThird(true)
            setIsActiveFourth(false)
        } else if (window.scrollY >= 4400 && window.scrollY < 4900) {
            setIsVisibleNavTabs(true)
            setIsActiveFirst(false);
            setIsActiveSecond(false)
            setIsActiveThird(false)
            setIsActiveFourth(true)

        } else if (window.scrollY > 4900) {
            setIsVisibleNavTabs(false);
        }

    }
    useEffect(() => {
        window.addEventListener("scroll", handleLinkFirst);
        return () => {
            window.removeEventListener("scroll", handleLinkFirst);
        };
    }, []);

    return (
        <>{isVisibleNavTabs ? <div
                className="mb:hidden z-20 overflow-y-hidden fixed top-[90px] w-full h-[102px] p-4 bg-white bg-opacity-50 rounded-[100px] backdrop-blur-[20px] justify-start items-start gap-4 inline-flex">
                <div
                    className={isActiveFirst ? "active-police-button" : "police-button"}>
                    <Link to={'first'} offset={-210} smooth={true}

                          className="w-[136px] text-center text-base font-semibold  leading-tight">Privacy
                        Policies
                    </Link>
                </div>
                <div
                    className={isActiveSecond ? "active-police-button" : "police-button"}>
                    <Link to={'second'} offset={-210} smooth={true}

                          className="w-auto text-center whitespace-nowrap text-base font-semibold leading-tight">Privacy
                        Disclosure of risks
                    </Link>
                </div>
                <div
                    className={isActiveThird ? "active-police-button" : "police-button"}>
                    <Link to={'third'} offset={-210} smooth={true}

                          className="w-auto text-center whitespace-nowrap text-base font-semibold leading-tight">Privacy
                        Commissions and fees
                    </Link>
                </div>
                <Link to={'fourth'} offset={-210} smooth={true}

                      className={isActiveFourth ? "active-police-button" : "police-button"}>
                    <div
                        className="w-auto text-center whitespace-nowrap text-base font-semibold leading-tight">Privacy
                        Terms of use
                    </div>
                </Link>
            </div>
            : null}
        </>

    );
};

export default NavTabsMobile;