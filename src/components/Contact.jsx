import React from 'react';
import { styles } from '../styles';
import testiavatar from "/src/assets/testi-avatar.jpg";
import formpattern from "/src/assets/form-pattern.png";

const Contact = () => {
  return (
    <section id="contact" className="relative bg-hero-bg mx-auto">
      <div className={`max-w-7xl mx-auto ${styles.paddingX}`}>
        <div className="pt-20 flex flex-col relative">
          <q className="text-7xl tracking-wide">I wanted to thank you for inviting me down for that amazing dinner the other night. The food was extraordinary.</q>
        </div>
        <div className="pt-20 flex justify-center">
          <img
            src={testiavatar}
            alt="avatar"
            className="rounded-full max-w-[300px] w-full" 
          />
        </div>
        <div className="flex justify-center pt-5">
          <p className="font-semibold text-accent tracking-wide">SAM JOHNSON</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:pl-10 bg-secondary border border-transparent mt-10">
          <div className='flex flex-col'>
            <h1 className="text-5xl tracking-wide mt-10">Online Reservation</h1>
            <p className="mt-3 tracking-wide font-normal">Booking request <span className="text-accent">+88-123-123456</span> or fill out the order form</p>
            <form className="max-w-lg mt-10">
              {/* Form elements */}
            </form>
          </div>
          <div className='flex flex-col items-center relative pb-20 mb-10'>
            <img src={formpattern} className='max-w-[600px]' alt="pattern" /> {/* Adjusted image width to be responsive */}
            <div className='pt-20 ml-10 mb-10 absolute'>
              <h1 className='text-8xl tracking-wide'>Contact Us</h1>
              <p className='font-bold tracking-wide mt-10'>Booking Request</p>
              <p className='font-bold tracking-wide mt-3 text-2xl text-accent cursor-pointer'>+88-123-123456</p>
              <p className='font-bold tracking-wide mt-10'>Location</p>
              <p className='font-normal tracking-wide mt-3 text-sm italic text-accent'>Restaurant St, Delicious City,<br />London 9578, UK</p>
              <p className='font-bold tracking-wide mt-10'>Lunch Time</p>
              <p className='font-normal tracking-wide mt-3 text-sm italic text-accent'>Monday to Sunday<br />11.00 am - 2.30pm</p>
              <p className='font-bold tracking-wide mt-10 '>Dinner Time</p>
              <p className='font-normal tracking-wide mt-3 text-sm italic text-accent'>Monday to Sunday<br />05.00 pm - 10.00 pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
