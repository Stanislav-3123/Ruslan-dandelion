import React, {useState} from "react";

const ImagesSlider = () => {
    const [isHovered1, setIsHovered1] = useState<boolean>(false)
    const [isHovered2, setIsHovered2] = useState<boolean>(false)
    const [isHovered3, setIsHovered3] = useState<boolean>(false)
    const [isHovered4, setIsHovered4] = useState<boolean>(false)

    const handleHover1 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(true)
        setIsHovered2(false)
        setIsHovered3(false)
        setIsHovered4(false)
    }
    const handleHover2 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(false)
        setIsHovered2(true)
        setIsHovered3(false)
        setIsHovered4(false)
    }
    const handleHover3 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(false)
        setIsHovered2(false)
        setIsHovered3(true)
        setIsHovered4(false)
    }
    const handleHover4 = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setIsHovered1(false)
        setIsHovered2(false)
        setIsHovered3(false)
        setIsHovered4(true)
    }
    const onMouseLeave = () => {
        setIsHovered1(false)
        setIsHovered2(false)
        setIsHovered3(false)
        setIsHovered4(false)
    }

    return (
        <div className="overflow-y-hidden sm:overflow-y-visible">
            <div
                className="hidden self-stretch  justify-start items-start sm:inline-flex">
                <div
                    className="flex gap-2 sm:gap-8 px-4 sm:px-8">
                    <div onMouseEnter={handleHover1} onMouseLeave={onMouseLeave}
                         className="flex flex-col sm:w-[260px] hover:w-[552px] justify-end duration-[500ms]
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image2.jpg')]">
                        {isHovered1 ? <div
                            className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-300 mb-[180px]">
                            <button className="gray_button duration-300">TEAM</button>
                            <button className="gray_button duration-300">EXPERIENCE</button>
                        </div> : null}

                        <div className="flex justify-end">
                            <div className="flex self-end flex-col gap-8 duration-300">
                                <p className="justify-end text-white text-base sm:text-xl duration-300 font-semibold font-['Roboto'] sm:leading-loose leading-relaxed">
                                    Experienced team with in gambling software development
                                </p>
                                {isHovered1 ? <span
                                    className="animate-fade-up animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                                 text-white text-sm sm:text-base font-normal font-['Roboto'] leading-snu sm:leading-relaxed">
                                We have
                            a team of experienced developers and designers.Our team is dedicated to providing
                            high-quality solutions that meet the specific needs of our clients.</span> : null}

                            </div>
                        </div>

                    </div>
                    <div onMouseEnter={handleHover2} onMouseLeave={onMouseLeave}
                         className="flex flex-col sm:w-[260px] hover:w-[552px] justify-end duration-[500ms]
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image1.jpg')]">
                        {isHovered2 ? <div
                            className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-300 mb-[180px]">
                            <button className="gray_button duration-300">TEAM</button>
                            <button className="gray_button duration-300">EXPERIENCE</button>
                        </div> : null}
                        <div className="flex justify-end">
                            <div className="flex self-end flex-col gap-8 duration-300">
                                <p className="justify-end text-white text-base sm:text-xl duration-300 font-semibold font-['Roboto'] sm:leading-loose leading-relaxed">
                                    Experienced team with in gambling software development
                                </p>
                                {isHovered2 ? <span
                                    className="animate-fade-up animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                                 text-white text-sm sm:text-base font-normal font-['Roboto'] leading-snu sm:leading-relaxed">
                                We have
                            a team of experienced developers and designers.Our team is dedicated to providing
                            high-quality solutions that meet the specific needs of our clients.</span> : null}

                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={handleHover3} onMouseLeave={onMouseLeave}
                         className="flex flex-col sm:w-[260px] hover:w-[552px] justify-end duration-[500ms]
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image3.jpg')]">
                        {isHovered3 ? <div
                            className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-300 mb-[180px]">
                            <button className="gray_button duration-300">TEAM</button>
                            <button className="gray_button duration-300">EXPERIENCE</button>
                        </div> : null}

                        <div className="flex justify-end">
                            <div className="flex self-end flex-col gap-8 duration-300">
                                <p className="justify-end text-white text-base sm:text-xl duration-300 font-semibold font-['Roboto'] sm:leading-loose leading-relaxed">
                                    Experienced team with in gambling software development
                                </p>
                                {isHovered3 ? <span
                                    className="animate-fade-up animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                                 text-white text-sm sm:text-base font-normal font-['Roboto'] leading-snu sm:leading-relaxed">
                                We have
                            a team of experienced developers and designers.Our team is dedicated to providing
                            high-quality solutions that meet the specific needs of our clients.</span> : null}

                            </div>
                        </div>
                    </div>
                    <div onMouseEnter={handleHover4} onMouseLeave={onMouseLeave}
                         className="flex flex-col sm:w-[260px] hover:w-[552px] justify-end duration-[500ms]
                         hover:justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image4.jpg')]">
                        {isHovered4 ? <div
                            className="animate-fade animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                             flex justify-end gap-2 duration-300 mb-[180px]">
                            <button className="gray_button duration-300">TEAM</button>
                            <button className="gray_button duration-300">EXPERIENCE</button>
                        </div> : null}

                        <div className="flex justify-end">
                            <div className="flex self-end flex-col gap-8 duration-300">
                                <p className="justify-end text-white text-base sm:text-xl duration-300 font-semibold font-['Roboto'] sm:leading-loose leading-relaxed">
                                    Experienced team with in gambling software development
                                </p>
                                {isHovered4 ? <span
                                    className="animate-fade-up animate-once animate-duration-300 animate-delay-100 animate-ease-linear animate-normal
                                 text-white text-sm sm:text-base font-normal font-['Roboto'] leading-snu sm:leading-relaxed">
                                We have
                            a team of experienced developers and designers.Our team is dedicated to providing
                            high-quality solutions that meet the specific needs of our clients.</span> : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="sm:hidden overflow-y-hidden self-stretch h-full justify-start items-start inline-flex">
                <div className="flex gap-2 px-4">
                    <div
                        className="flex flex-col  justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image2.jpg')]">
                        <div className="flex justify-end gap-2">
                            <button className="gray_button">TEAM</button>
                            <button className="gray_button">EXPERIENCE</button>
                        </div>
                        <div className="flex flex-col gap-8">
                            <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                Experienced team with in gambling software development
                            </p>
                            <span className="text-white text-sm font-normal font-['Roboto'] leading-snu">We have
                            a team of experienced developers and designers.Our team is dedicated to providing
                            high-quality solutions that meet the specific needs of our clients.</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image1.jpg')]">
                        <div className="flex justify-end gap-2">
                            <button className="gray_button">innovation</button>
                            <button className="gray_button">safety</button>
                        </div>
                        <div className="flex flex-col gap-8">
                            <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                Innovative solutions for a safe and secure gaming environment
                            </p>
                            <span className="text-white text-sm font-normal font-['Roboto'] leading-snu">We are
                                constantly working on innovative gaming solutions that provide a safe and secure
                                gaming environment, improve the gaming experience, and boost gaming revenue. Our
                                solutions are designed to meet the latest trends in the gambling industry</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image3.jpg')]">
                        <div className="flex justify-end gap-2">
                            <button className="gray_button">High-quality</button>
                        </div>
                        <div className="flex flex-col gap-8">
                            <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                High-quality software for improved gaming experience and revenue growth
                            </p>
                            <span className="text-white text-sm font-normal font-['Roboto'] leading-snu">We are
                                committed to providing high-quality software solutions that meet the specific
                                needs of our clients and help them achieve their business goals. Our software
                                is designed to ensure a safe and secure gaming environment, improve the gaming
                                experience, and boost gaming revenue.</span>
                        </div>
                    </div>
                    <div
                        className="flex flex-col justify-between p-8 rounded-[30px] bg-cover bg-center h-[480px] w-[300px] bg-[url('/images/image/image4.jpg')]">
                        <div className="flex justify-end gap-2">
                            <button className="gray_button">achieving goals</button>
                        </div>
                        <div className="flex flex-col gap-8">
                            <p className="text-white text-base font-semibold font-['Roboto'] leading-relaxed">
                                Successful projects delivered worldwide in the gambling software industry
                            </p>
                            <span className="text-white text-sm font-normal font-['Roboto'] leading-snu">We have
                                successfully delivered numerous projects for clients worldwide in the gambling
                                software industry. Our team is dedicated to providing high-quality solutions that
                                meet the specific needs of our clients and help them achieve their business goals.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagesSlider;