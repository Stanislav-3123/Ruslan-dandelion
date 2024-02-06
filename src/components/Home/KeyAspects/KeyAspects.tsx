import NotesSlider from "../../Sliders/NotesSlider.tsx";

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
            <div></div>
        </div>
    );
};

export default KeyAspects;