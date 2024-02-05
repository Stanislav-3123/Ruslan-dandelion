
const ImagesSlider = () => {
    return (
        <div
            className="overflow-y-hidden self-stretch h-full justify-start items-start inline-flex">
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
    );
};

export default ImagesSlider;