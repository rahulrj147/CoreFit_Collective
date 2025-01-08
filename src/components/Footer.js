import React from 'react';
import Logo from '../assets/images/Logo-Icon.svg';

const Footer = () => (

<div>
  <div>
    <div className='flex flex-col items-center p-16 bg-blue-800 ' >
      <img src={Logo} loading='lazy' alt='Footer Logo'  ></img>
      <div className='text-[30px] font-extrabold' >Holler Out To Us</div>
      <div className='text-[16px] font-bold my-[15px] text-center ' >
        "Call us 8000000000" <br>
        </br>
        Email Us Support@carefit_collective
      </div>
      <div className='my-5' >
        Temp <span className='font-semibold' >CoreFit Collective </span>Test City ,Test State, India
      </div>
      <div>Copyright @ 2024 CoreFit Collective</div>
      <div>
        Privacy Policy | Terms & Service | Support
      </div>
      <div className='text-[24px]  my-5' >
        Made By <span className='font-extrabold' >Rahul Kumar Jha</span>
      </div>
    </div>
  </div>
</div>
);

export default Footer;