import React from 'react';
import './wrappers.css';

const MainWrapper = ({ children }) => {
    return (
        <div className="main-wrapper">
            {children}
        </div>
    );
}

export default MainWrapper;
