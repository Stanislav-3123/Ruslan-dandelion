import ImagesSlider from "../../Sliders/ImagesSlider.tsx";

const AboutUs = () => {
    return (
        <div className="w-full flex flex-col">
            <div className="p-4 flex flex-row justify-between">
                <p className="description_number">(01)</p>
                <h2>ABOUT US</h2>
            </div>
            <p className="p-4">Our team of experienced developers and designers work
                together to create innovative gaming solutions that provide a safe
                and secure gaming environment, improve the gaming experience, and boost
                gaming revenue.</p>
            <h3 className="p-4">We are committed to providing
                <span className="blue_span"> high-quality software solutions </span>
                that meet the specific needs of our clients and help them
                <span className="blue_span"> achieve their business goals.</span></h3>
            <ImagesSlider/>
        </div>
    );
};

export default AboutUs;