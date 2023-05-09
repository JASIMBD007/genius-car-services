import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const About = () => {
    return (
        <div className='m-5'>
            <PageTitle title="About"></PageTitle>
            <h2 className='text-center mb-4 text-warning text-decoration-underline '>About Genius Car Doctor</h2>
            <article>Genius Car Doctor is a website that offers a range of services to help car owners with their vehicle-related needs. Their team of experienced and skilled mechanics is dedicated to providing high-quality services and solutions to keep your car running smoothly.</article>
            <br />
            <p>Our services include diagnostics, repairs, and maintenance for all types of vehicles, from passenger cars to light trucks and SUVs. They use the latest technology and equipment to diagnose and repair any issues with your car's engine, transmission, brakes, suspension, and more.</p>
            <br />
            <p>Genius Car Doctor also provides routine maintenance services, such as oil changes, tire rotations, and brake inspections, to help ensure that your car is always in top condition. They offer personalized service and work closely with each customer to develop a maintenance schedule that fits their specific needs and budget.</p>
            <br />
            <p>In addition to their core services, Genius Car Doctor also offers roadside assistance for emergency situations, such as flat tires, dead batteries, or lockouts. They also provide towing services if your car needs to be taken to their repair facility for further work.</p>
            <br />
            <p>
                With a commitment to customer satisfaction and competitive pricing, Genius Car Doctor is the go-to destination for all your car repair and maintenance needs. Whether you need routine maintenance or major repairs, their team of experts is ready to help you get back on the road safely and quickly.
            </p>
        </div>
    );
};

export default About;