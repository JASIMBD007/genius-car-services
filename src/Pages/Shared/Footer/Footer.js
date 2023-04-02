import React from 'react';

const Footer = () => {
    const getCurrentYear = () => { return new Date().getFullYear(); };

    return (
        <footer className='text-center mt-5'>
            <p><small>Copyright &copy; {getCurrentYear()}</small></p>
        </footer>
    );
};

export default Footer;