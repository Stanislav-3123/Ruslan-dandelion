import Title from "./Title/Title.tsx";
import AboutUs from "./AboutUs/AboutUs.tsx";
import OurSolutions from "./OurSolutions/OurSolutions.tsx";
import Faq from "./FAQ/Faq.tsx";
import ContactForm from "../ContactForm/ContactForm.tsx";
import KeyAspects from "./KeyAspects/KeyAspects.tsx";
import TitleDT from "./Title/TitleDT.tsx";

const Home = () => {
    return (
        <div className="pt-[120px] inline-flex flex-col gap-[120px] justify-start items-center w-full">
            <Title/>
            <TitleDT/>
            <AboutUs/>
            <OurSolutions/>
            <Faq/>
            <ContactForm/>
            <KeyAspects/>
        </div>
    );
};

export default Home;