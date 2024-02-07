import {Link} from "react-scroll";
import {useEffect, useState} from "react";

const NavTabsMobile = () => {
    const [isActiveFirst, setIsActiveFirst] = useState<boolean>(false)
    const [isActiveSecond, setIsActiveSecond] = useState<boolean>(false)
    const [isActiveThird, setIsActiveThird] = useState<boolean>(false)
    const [isActiveFourth, setIsActiveFourth] = useState<boolean>(false)
    const [isVisibleNavTabs, setIsVisibleNavTabs] = useState<boolean>(true)
    const handleLinkFirst = () => {
        if (window.scrollY >= 0 && window.scrollY < 600) {
            setIsVisibleNavTabs(true)
            setIsActiveFirst(true);
            setIsActiveSecond(false)
            setIsActiveThird(false)
            setIsActiveFourth(false)
        } else if (window.scrollY >= 600 && window.scrollY < 1200) {
            setIsVisibleNavTabs(true)
            setIsActiveFirst(false);
            setIsActiveSecond(true)
            setIsActiveThird(false)
            setIsActiveFourth(false)
        } else if (window.scrollY >= 1200 && window.scrollY < 1500) {
            setIsVisibleNavTabs(true)
            setIsActiveFirst(false);
            setIsActiveSecond(false)
            setIsActiveThird(true)
            setIsActiveFourth(false)
        } else if (window.scrollY >= 1500 && window.scrollY < 1900) {
            setIsVisibleNavTabs(true)
            setIsActiveFirst(false);
            setIsActiveSecond(false)
            setIsActiveThird(false)
            setIsActiveFourth(true)

        } else if (window.scrollY > 2100) {
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
                className="w-full self-stretch sticky top-[60px] sm:hidden z-20 overflow-y-hidden h-[87px] whitespace-nowrap p-4 bg-blue-100 rounded-[100px] backdrop-blur-[20px] justify-start items-start gap-4 inline-flex">
                <div
                    className={isActiveFirst ? "active-police-button" : "police_button"}>
                    <Link to={'first'} offset={-180} smooth={true}

                          className="">Privacy
                        Policies
                    </Link>
                </div>
                <div
                    className={isActiveSecond ? "active-police-button" : "police_button"}>
                    <Link to={'second'} offset={-160} smooth={true}

                          className="">Privacy
                        Disclosure of risks
                    </Link>
                </div>
                <div
                    className={isActiveThird ? "active-police-button" : "police_button"}>
                    <Link to={'third'} offset={-160} smooth={true}

                          className="">Privacy
                        Commissions and fees
                    </Link>
                </div>
                <Link to={'fourth'} offset={-160} smooth={true}

                      className={isActiveFourth ? "active-police-button" : "police_button"}>
                    <div
                        className="">Privacy
                        Terms of use
                    </div>
                </Link>
            </div>
            : null}
        </>

    );
};

export default NavTabsMobile;