import {Link} from "react-scroll";
import ContactFormNoNumber from "../ContactForm/ContactFormNoNumber.tsx";

const ContactsPage = () => {
    return (
        <div className="flex flex-col gap-[120px]">
            <div className="w-full px-4 mt-[120px] flex flex-col gap-8">
                <h2 className="text-neutral-900 text-[32px] font-bold font-['Syncopate']">CONTACTS</h2>
                <h3>Smart Choice is a modern software company</h3>
                <div className="flex flex-col">
                    <div className="flex-col flex py-8 gap-8 border-b-2 border-slate-300">
                        <button className="faq_button">WRITE US</button>
                        <h4>Email adress</h4>
                        <p>support@smartchoice.com</p>
                    </div>
                </div><div className="flex flex-col">
                    <div className="flex-col flex py-8 gap-8 border-b-2 border-slate-300">
                        <button className="faq_button">CALL US</button>
                        <h4>Phone number</h4>
                        <p>+80000000</p>
                    </div>
                </div><div className="flex flex-col">
                    <div className="flex-col flex py-8 gap-8 border-b-2 border-slate-300">
                        <button className="faq_button">FIND US</button>
                        <h4>Adress</h4>
                        <p>Schottegatweg Oost 10 Unit 1-9, Bon Bini Business Center , Curacao</p>
                    </div>
                </div>
                <Link to={"contactForm"} offset={-190} smooth={true} duration={900}
                      className="cursor-pointer bg-white bg-opacity-20 rounded-[100px] border border-white flex flex-row p-4 gap-4 w-full">
                    <p className="w-full self-center">Do you want to collaborate with us?</p>
                    <button className="w-[200px] flex flex-row gap-2 whitespace-nowrap">
                        <h3 className="self-center text-neutral-900 text-base font-bold font-['Roboto'] uppercase">let's
                            talk</h3>
                        <svg
                            className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 hover:rotate-[-45deg] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
                        </svg>
                    </button>
                </Link>
            </div>
            <ContactFormNoNumber/>
        </div>
    );
};

export default ContactsPage;