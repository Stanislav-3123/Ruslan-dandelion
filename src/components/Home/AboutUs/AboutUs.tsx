import ImagesSlider from "../../Sliders/ImagesSlider.tsx";

const AboutUs = () => {
    return (
        <div className="w-full flex flex-col sm:gap-16">
            <div className="w-full flex sm:flex-row flex-col">
                <div className="fc sm:justify-between sm:w-1/2">
                    <div className="p-4 sm:px-8 sm:gap-8 flex flex-row sm:flex-col justify-between">
                        <p className="description_number self-start">(01)</p>
                        <h2>ABOUT US</h2>
                    </div>
                    <p className="p-4 sm:px-8 sm:pr-[152px]">Our team of experienced developers and designers work
                        together to create innovative gaming solutions that provide a safe
                        and secure gaming environment, improve the gaming experience, and boost
                        gaming revenue.</p>
                </div>
                <h3 className="p-4 sm:px-8 sm:h-auto sm:w-1/2">We are committed to providing
                    <span className="blue_span"> high-quality software solutions </span>
                    that meet the specific needs of our clients and help them
                    <span className="blue_span"> achieve their business goals.</span></h3>
            </div>
            <ImagesSlider/>
        </div>
    );
};

export default AboutUs;