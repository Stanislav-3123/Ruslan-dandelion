import {Link} from "react-router-dom";
import Modal from "../Modal/Modal.tsx";
import {useState} from "react";

const ContactForm = () => {

    const [isOpen, setIsOpen] = useState(false);
    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [message, setMessage] = useState<string>("")
    const [checked, setChecked] = useState<boolean>(false);
    const [errorName, setErrorName] = useState<boolean>(false);
    const [errorEmail, setErrorEmail] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<boolean>(false);
    const [checkboxError, setCheckboxError] = useState<boolean>(true)

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };
    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    async function sendEmail(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "" && checked) {
            const response = await fetch("/api/sendMail.js", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        message,
                    }),
                }
            );
            console.log(response.body);
            setName('');
            setEmail('');
            setMessage('');
            setChecked(false);
            setErrorName(false);
            setErrorEmail(false);
            setErrorMessage(false);
            setCheckboxError(true);
            handleOpen();
        } else {
            setErrorName(true);
            setErrorEmail(true);
            setErrorMessage(true);
        }
        if (!checked) {
            setCheckboxError(false);
        }

    }

    return (
        <div className="py-8 px-4 sm:px-8 flex flex-col sm:flex-row w-full bg-white rounded-[30px] gap-12 sm:gap-8">
            <div className="fc gap-12 sm:w-1/2 sm:justify-between">
                <div className="w-full flex flex-row justify-between sm:gap-8 sm:flex-col">
                    <p className="description_number sm:self-start">(04)</p>
                    <h2>CONTACT FORM</h2>
                </div>
                <h3 className="sm:pr-[152px]"><span className="blue_span">Fill out this form</span> and we will contact
                    you shortly.</h3>
            </div>
            <form id={"contactForm"}
                  className="w-full sm:w-1/2 p-4 bg-blue-100 rounded-[20px] flex-col justify-start items-start gap-4 inline-flex">
                <input type="text"  name="name" value={name} onChange={handleNameChange} placeholder="NAME" className={errorName ? "input_error" : "input" }/>
                <input type="text"  name="email" value={email} onChange={handleEmailChange} placeholder="EMAIL OR PHONE NUMBER" className={errorEmail ? "input_error" : "input" }/>
                <textarea placeholder="MESSAGE"  name="message" onChange={handleMessageChange} value={message} className={errorMessage ? "textarea_error" : "textarea" }></textarea>
                <div className="sm:w-full fc gap-4 sm:flex-row sm:justify-between">
                    <div className="flex gap-2 content-center">
                        <input type="checkbox"  name="checkbox" onChange={() => {
                            setChecked(!checked)
                            setCheckboxError(true)
                        }} checked={checked} className="self-center"/>
                        <p className={checkboxError ? "self-center" : "self-center red_underline"}>
                            I have read and accept the
                            <Link className={checkboxError ? "pp_link " : "pp_link red_underline"} to={"/policies"}> Privacy Policy</Link>
                            {/*{checkboxError ? null*/}
                            {/* : <span className="required_title">title is required</span >}*/}
                        </p>
                    </div>
                    <div onClick={sendEmail} className="flex flex-row gap-2 self-end">
                        <h3 className="self-center text-neutral-900 sm:text-lg text-base font-bold font-['Roboto'] uppercase">SEND</h3>
                        <svg
                            className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 rotate-[-45deg] hover:rotate-[0deg] duration-300"
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
                        </svg>
                    </div>
                </div>
            </form>
            {isOpen ? <Modal onClose={handleClose}/> : null}
        </div>
    );
};

export default ContactForm;

