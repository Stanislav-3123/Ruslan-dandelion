const Modal = ({onClose}: { onClose: () => void }) => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-30 bg-black bg-opacity-40">
            <div data-aos="zoom-in"
                className="absolute mb:relative bottom-0 w-full inline-flex flex-row mb:gap mb:justify-center mb:gap-4">
                <div className="w-full mb:w-[657px] mb:h-[335px] h-[235px] mb:p-8 p-4 bg-white rounded-t-[40px] mb:rounded-[40px] inline-flex flex-col items-center mb:gap-8 gap-4">
                    <h3 className="w-[328px] mb:w-[593px] text-center text-stone mb:text-8xl text-5xl font-bold">Thank you</h3>
                    <p className="w-[328px] mb:w-[593px] text-center text-neutral-800 text-base mb:text-lg font-normal font-['Inter'] mb:leading-[28.80px] leading-relaxed">Your form has been successfully submitted. We will contact you soon.</p>
                    <button
                        onClick={onClose}
                        className="hover:bg-stone w-[328px] mb:w-full h-[70px] px-[69px] py-6 bg-rose rounded-[20px] justify-center items-center gap-2.5 inline-flex">
                        <span className="text-white text-sm mb:text-xl mb:leading-loose font-bold leading-snug">Thanks</span>
                    </button>
                </div>
                <button
                    onClick={onClose}
                    className="hidden mb:flex">
                    <div className="hover:fill-rose w-[62px] h-[62px] bg-white rounded-[20px] justify-center items-center inline-flex">
                        <svg className=""
                            xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
                            <path
                                d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Modal;