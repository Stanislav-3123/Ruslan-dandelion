const OurSolutions = () => {
    return (
        <div className="flex flex-col gap-12 py-8 px-4 w-full h-auto rounded-[30px] bg-white">
            <div className="p-4 flex flex-row justify-between">
                <p className="description_number">(02)</p>
                <h2>OUR SOLUTIONS</h2>
            </div>
            <p>Our solutions provide safe and secure
                gaming environment, innovative gaming
                solutions, improve your gaming experience,
                and boost your gaming revenue</p>
            <div className="flex flex-col gap-8">
                <div className="flex gap-2">
                    <h3>Safe and secure gaming</h3>
                    <div className="w-16 h-16 bg-[url('/images/imageForCategories/slicedCube.png')] bg-cover"></div>
                </div>
                <div className="flex gap-2">
                    <h3>Innovative gaming solutions</h3>
                    <div className="w-16 h-16 bg-[url('/images/imageForCategories/spiral.png')] bg-cover"></div>
                </div>
                <div className="flex gap-2">
                    <h3>Improve gaming experience</h3>
                    <div className="w-16 h-16 bg-[url('/images/imageForCategories/pyramid.png')] bg-cover"></div>
                </div>
                <div className="flex gap-2">
                    <h3>Boost your gaming revenue</h3>
                    <div className="w-16 h-16 bg-[url('/images/imageForCategories/cone.png')] bg-cover"></div>
                </div>
            </div>
        </div>
    );
};

export default OurSolutions;