import React from 'react';

interface childrenProps {
    children: React.ReactNode
}

const Wrapper = ({children}: childrenProps) => {
    return (
        <div className="min-h-screen flex flex-col items-center w-full bg-blue-100">
            <div className="max-w-[1440px] min-h-screen flex flex-col items-center">
                {children}
            </div>
        </div>
    );
};

export default Wrapper;