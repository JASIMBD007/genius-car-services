import React from 'react';
import './Footer.css';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className="wrapper">

            <div className="footer text-center text-white mt-5 bg-primary p-2 " >
                <p><small>Copyright &copy; {year}</small></p>
            </div>

        </div >
    );

};

export default Footer;