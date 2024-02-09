import ImagesSlider from "../../Sliders/ImagesSlider.tsx";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            disable: false,
            once: true,
        });
    }, []);
    return (
        <div className="w-full flex flex-col sm:gap-16">
            <div className="w-full flex sm:flex-row flex-col">
                <div className="fc sm:justify-between sm:w-1/2">
                    <div className="p-4 sm:px-8 sm:gap-8 flex flex-row sm:flex-col justify-between">
                        <p data-aos="fade-right" data-aos-duration="500"
                            className="description_number self-start">(01)</p>
                        <h2 data-aos="fade-left" data-aos-duration="500"
                        >ABOUT US</h2>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-duration="500"
                        className="p-4 sm:px-8 sm:pr-[152px]">Our team of experienced developers and designers work
                        together to create innovative gaming solutions that provide a safe
                        and secure gaming environment, improve the gaming experience, and boost
                        gaming revenue.</p>
                </div>
                <h3 data-aos="zoom-in-up" data-aos-duration="500"
                    className="p-4 sm:px-8 sm:h-auto sm:w-1/2">We are committed to providing
                    <span className="blue_span"> high-quality software solutions </span>
                    that meet the specific needs of our clients and help them
                    <span className="blue_span"> achieve their business goals.</span></h3>
            </div>
            <div data-aos="zoom-in-up" data-aos-duration="500"
                className="overflow-y-hidden">
            <ImagesSlider/>
            </div>
        </div>
    );
};

export default AboutUs;