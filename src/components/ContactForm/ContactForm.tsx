import {Link} from "react-router-dom";

const ContactForm = () => {
    return (
        <div className="py-8 px-4 flex flex-col w-full bg-white rounded-[30px] gap-12">
            <div className="flex flex-row justify-between">
                <p className="description_number">(04)</p>
                <h2>CONTACT FORM</h2>
            </div>
            <h3><span className="blue_span">Fill out this form 
            </span>and we will contact you shortly.</h3>
            <form className="w-full p-4 bg-blue-100 rounded-[20px] flex-col justify-start items-start gap-4 inline-flex">
                <input type="text" placeholder="NAME"/>
                <input type="text" placeholder="EMAIL OR PHONE NUMBER"/>
                <textarea placeholder="MESSAGE"></textarea>
                <div className="flex gap-2 content-center">
                    <input type="checkbox"/>
                    <p>I have read and accept the<Link to={"/policies"}>Privacy Policy</Link></p>
                </div>
                <div className="flex flex-row gap-2 self-end">
                    <h3 className="self-center text-neutral-900 text-base font-bold font-['Roboto'] uppercase">SEND</h3>
                    <svg
                        className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 hover:rotate-[-45deg] duration-300"
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
                    </svg>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;