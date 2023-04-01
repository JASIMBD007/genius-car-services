import React from 'react';

const Footer = () => {
    const getCurrentYear = () => { return new Date().getFullYear(); };

    return (
        <div>
            <p><small>Copyright &copy; {getCurrentYear()}</small></p>
        </div>
    );
};

export default Footer;