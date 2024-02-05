import SliderSVG from "../../Sliders/SliderSVG.tsx";

const Title = () => {
    return (
        <div className="w-full mb:h-full h-[587pxpx] flex-col justify-start gap-8 items-start inline-flex">
            <h1 className="px-4">SMART CHOICE</h1>
            <h3 className="px-4">Smart Choice is a modern software company</h3>
            <p className="px-4">Our company develops software for gambling companies.
                We create high-quality products that help our clients
                improve their business and attract more players.</p>
            <div className="mx-auto bg-cover bg-[url('/images/image/mainCub.png')] w-[280px] h-[280px]"/>
            <div className="px-4">
                <div
                    className="cursor-pointer bg-white bg-opacity-20 rounded-[100px] border border-white flex flex-row p-4 gap-4 w-full">
                    <p className="w-full self-center">Do you want to collaborate with us?</p>
                    <button className="w-[200px] flex flex-row gap-2 whitespace-nowrap">
                        <h3 className="self-center text-neutral-900 text-base font-bold font-['Roboto'] uppercase">let's
                            talk</h3>
                        <svg className="w-[50px] h-[50px] rounded-[100px] p-[12px] bg-rose-600 hover:rotate-[-45deg] duration-300"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="#fff" d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8-8 8-1.425-1.4 5.6-5.6Z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <SliderSVG/>
        </div>
    );
};

export default Title;