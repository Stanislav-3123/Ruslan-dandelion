import { useState } from "react";

const Test = () => {
    const [isBlock2Visible, setBlock2Visible] = useState(false);
    const [isBlock3Visible, setBlock3Visible] = useState(false);

    const handleBlock1MouseEnter = () => {
        setBlock2Visible(!isBlock2Visible);
        setBlock3Visible(!isBlock3Visible);
    };

    const handleBlock2MouseEnter = () => {
        setBlock2Visible(false);
        setBlock3Visible(false);
    };

    const handleBlock3MouseEnter = () => {
        setBlock2Visible(false);
        setBlock3Visible(false);
    };

    return (
        <div className="w-20 h-20 bg-white"
             onMouseLeave={handleBlock1MouseEnter}
             onMouseEnter={handleBlock1MouseEnter}>
            <div className={isBlock2Visible ? "w-6 h-6 bg-black" : "hidden"} onMouseEnter={handleBlock2MouseEnter}>
                <div className={isBlock3Visible ? "w-6 h-6 bg-black" : "hidden"} onMouseEnter={handleBlock3MouseEnter}>

                </div>
            </div>
        </div>
    );
};

export default Test;