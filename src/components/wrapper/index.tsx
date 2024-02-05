import React from 'react';

interface childrenProps {
    children: React.ReactNode
}

const Wrapper = ({children}: childrenProps) => {
    return (
        <div className="min-h-screen flex flex-col mx-auto items-center w-full max-w-[1440px]">
            {children}
        </div>
    );
};

export default Wrapper;