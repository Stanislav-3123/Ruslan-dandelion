import NotesSlider from "../../Sliders/NotesSlider.tsx";
import {Link} from "react-scroll";

const KeyAspects = () => {
    return (
        <div className="w-full flex flex-col gap-12">
            <div className="px-4 flex flex-row justify-between">
                <p className="description_number">(05)</p>
                <h2>KEY ASPECTS</h2>
            </div>
            <p className="px-4">Our software solutions provide a safe and secure gaming environment,
                user-friendly interface, high-quality graphics, reliable gameplay,
                and real-time analytics, ensuring an enhanced gaming experience and
                optimized gaming experiences for players.</p>
            <NotesSlider/>
            <div className="px-4">
                <Link to={"contactForm"} offset={-190} smooth={true} duration={900}
                      className="cursor-pointer bg-white bg-opacity-20 rounded-[30px] border border-white flex flex-col px-4 py-8 gap-8 w-full">
                    <p className="w-full self-center">Want to write to us? Ask us a question or send your feedback.</p>
                    <button className="flex flex-row gap-2 self-end whitespace-nowrap">
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
        </div>
    );
};

export default KeyAspects;