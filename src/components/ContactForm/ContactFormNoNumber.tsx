import {Link} from "react-router-dom";
import {useEffect} from "react";

const ContactFormNoNumber = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [])

    return (
        <div id={"contactForm"} className="py-8 px-4 flex flex-col w-full bg-white rounded-[30px] gap-12">
            <div className="w-full flex flex-row justify-between">
                <h2>CONTACT FORM</h2>
            </div>
            <h3><span className="blue_span">Fill out this form 
            </span> and we will contact you shortly.</h3>
            <form id={"contactForm"} className="w-full p-4 bg-blue-100 rounded-[20px] flex-col justify-start items-start gap-4 inline-flex">
                <input type="text" placeholder="NAME" className="input"/>
                <input type="text" placeholder="EMAIL OR PHONE NUMBER" className="input"/>
                <textarea placeholder="MESSAGE" className="textarea"></textarea>
                <div className="flex gap-2 content-center">
                    <input type="checkbox" className=""/>
                    <p>I have read and accept the <Link className="pp_link" to={"/policies"}>Privacy Policy</Link></p>
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

export default ContactFormNoNumber;

// import React, {useEffect, useState} from "react";
// import {Link} from "react-router-dom";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Modal from "../modal/Modal.tsx";
//
//
// const ContactForm = () => {
//
//     useEffect(() => {
//         AOS.init({
//             disable: false,
//             once: true,
//         });
//     }, []);
//
//     const [isOpen, setIsOpen] = useState(false);
//     const handleOpen = () => {
//         setIsOpen(true);
//     };
//
//     const handleClose = () => {
//         setIsOpen(false);
//     };
//
//     const [name, setName] = useState<string>("")
//     const [email, setEmail] = useState<string>("")
//     const [message, setMessage] = useState<string>("")
//     const [checked, setChecked] = useState<boolean>(false);
//     const [errorName, setErrorName] = useState<boolean>(false);
//     const [errorEmail, setErrorEmail] = useState<boolean>(false);
//     const [errorMessage, setErrorMessage] = useState<boolean>(false);
//     const [checkboxError, setCheckboxError] = useState<boolean>(true)
//
//     const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setName(e.target.value);
//     }
//     const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setEmail(e.target.value);
//     };
//     const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setMessage(e.target.value);
//     };
//
//     async function sendEmail(e: { preventDefault: () => void }) {
//         e.preventDefault();
//         if (name.trim() !== "" && email.trim() !== "" && message.trim() !== "" && checked) {
//             const response = await fetch("/api/sendEmail", {
//                     method: "POST",
//                     headers: {
//                         "content-type": "application/json",
//                     },
//                     body: JSON.stringify({
//                         name,
//                         email,
//                         message,
//                     }),
//                 }
//             );
//             console.log(response.body);
//             setName('');
//             setEmail('');
//             setMessage('');
//             setChecked(false);
//             setErrorName(false);
//             setErrorEmail(false);
//             setErrorMessage(false);
//             setCheckboxError(true);
//             handleOpen();
//         } else {
//             setErrorName(true);
//             setErrorEmail(true);
//             setErrorMessage(true);
//         }
//         if (!checked) {
//             setCheckboxError(false);
//         }
//
//     }
//
//
//     return (
//         <div id="contactForm"
//              className="mt-[120px] w-full h-[976px] mb:h-[500px] mb:flex-row flex-col justify-start items-start inline-flex ">
//             <div className="mb:flex mb:flex-col mb:self-center w-full mb:h-[640px] mb:justify-between mb:w-1/2">
//                 <div data-aos="zoom-in"
//                      className=" mb:text-8xl mb:flex mb:self-center mb:pt-[180px] text-stone text-5xl p-8 font-bold">Have
//                     questions?
//                 </div>
//                 <div className="mb:flex mb:flex-row">
//                     <div data-aos="zoom-in" data-aos-duration={400} data-aos-delay={300}
//                          className="mb:justify-center mb:h-[250px] w-full h-[150px] mb:flex mb:self-center p-8 bg-stone rounded-[40px] justify-start items-center gap-2.5 inline-flex">
//                         <div className="text-white text-5xl font-bold">Let's talk</div>
//                     </div>
//                     <div data-aos="zoom-in" data-aos-duration={400} data-aos-delay={400}
//                          className="mb:h-[250px] w-full h-[150px] mb:flex mb:self-center bg-white rounded-[40px] flex-col justify-center items-center gap-2.5 inline-flex">
//                         <div
//                             className="mb:bg-cover mb:bg-[url('/images/arrow_forward.svg')] mb:w-[50px] mb:h-[50px] mb:animate-shake mb:animate-infinite mb:animate-duration-1000 mb:animate-ease-in"/>
//                         <div
//                             className="mb:hidden bg-cover bg-[url('/images/arrow-down.svg')] w-[50px] h-[50px] animate-bounce"/>
//                     </div>
//                 </div>
//             </div>
//             <form data-aos="zoom-in" data-aos-duration={500} data-aos-delay={500}
//                   className="mb:h-auto w-full mb:w-1/2 p-8 bg-white rounded-[40px] mb:gap-[70px] gap-8 flex-col flex">
//                 <div className="inline-flex gap-[64px] flex-col">
//                     <input
//                         className={errorName ? "w-full border-b py-[10px] placeholder-rose border-stone focus:placeholder:text-slate-400 outline-0 focus:placeholder:pl-4"
//                             : "w-full border-b py-[10px] placeholder-stone border-stone focus:placeholder:text-slate-400 outline-0 focus:placeholder:pl-4"}
//                         type="text"
//                         value={name}
//                         onChange={handleNameChange}
//                         placeholder="Name"/>
//                     <input
//                         className={errorEmail ? "w-full border-b py-[10px] placeholder-rose border-stone focus:placeholder:text-slate-400 outline-0 focus:placeholder:pl-4"
//                             : "w-full border-b py-[10px] placeholder-stone border-stone focus:placeholder:text-slate-400 outline-0 focus:placeholder:pl-4"}
//                         type="text"
//                         value={email}
//                         onChange={handleEmailChange}
//                         placeholder="Email or phone number"/>
//
//                     <textarea
//                         className={errorMessage ? "w-full border-b py-[10px] resize-none placeholder-rose border-stone mb:h-24 focus:placeholder:text-slate-400 outline-0 focus:placeholder:pl-4"
//                             : "w-full border-b py-[10px] resize-none placeholder-stone border-stone mb:h-24 focus:placeholder:text-slate-400 outline-0 focus:placeholder:pl-4"}
//                         minLength={10}
//                         maxLength={300}
//                         value={message}
//                         onChange={handleMessageChange}
//                         placeholder="Your message"/>
//
//                 </div>
//                 <div className="mb:flex mb:flex-col mb:gap-8">
//                     <div className="inline-flex flex-col gap-4 mb:self-start">
//                         {checkboxError ? null :
//                             <div className="text-rose font-bold self-center">Title is required</div>}
//                         <div className="inline-flex gap-2  ">
//                             <input className="accent-rose cursor-pointer"
//                                    type="checkbox"
//                                    checked={checked}
//                                    onChange={() => {
//                                        setChecked(!checked)
//                                        setCheckboxError(true)
//                                    }}
//                             />
//                             <div className="text-stone text-base font-normal font-['Inter'] leading-relaxed">I have read and
//                                 accept the <Link onClick={() => window.scrollTo({top: 0})} to={'/policies'}
//                                                  className="text-rose text-base font-bold font-['Inter'] leading-relaxed">Privacy
//                                     Policy</Link>
//                             </div>
//                         </div>
//                     </div>
//                     <button
//                         className="hover:bg-stone duration-200 w-full h-20 px-[69px] py-6 bg-rose rounded-[20px] justify-center items-center gap-2.5 inline-flex"
//                         onClick={sendEmail}
//                     >
//                         <div className="text-white text-xl font-bold leading-loose">Let's Talk</div>
//                     </button>
//                 </div>
//             </form>
//             {isOpen ? <Modal onClose={handleClose}/> : null}
//         </div>
//     );
// };
//
// export default ContactForm;