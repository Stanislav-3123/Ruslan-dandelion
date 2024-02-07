import { useState } from "react";

const Test = () => {
    const [isBlock2Visible, setBlock2Visible] = useState(false);
    const [isBlock3Visible, setBlock3Visible] = useState(false);

    const handleBlock1MouseEnter = () => {
        setBlock2Visible(true);
        setBlock3Visible(true);
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
        <div className="block_1" onMouseEnter={handleBlock1MouseEnter}>
            <div className={isBlock2Visible ? "visible" : ""} onMouseEnter={handleBlock2MouseEnter}>
                <div className={isBlock3Visible ? "visible" : ""} onMouseEnter={handleBlock3MouseEnter}>
                    {/* Контент блока 3 */}
                </div>
            </div>
        </div>
    );
};

export default Test;