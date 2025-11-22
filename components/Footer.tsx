import React from 'react';

import { FaLocationArrow } from 'react-icons/fa6';

import MagicButton from './ui/MagicButton';
import { socialMedia } from '@/data';

const Footer = () => {
  return (
    <section className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        {/* Profile picture above the contact button */}
        <div className="mb-8 w-full">
          <a
            href="#about"
            aria-label="Profile"
              className="block mx-auto rounded-full p-3 w-[220px] h-[220px]
                 backdrop-blur-md bg-white/10 border border-white/20 shadow-xl
                 transition-all duration-700 ease-out"
          >
            <img
              src="/me.jpeg"
              alt="Profile"
              className="w-full h-full object-cover object-[0_20%] rounded-full
                 filter grayscale transition-all duration-500 ease-out
                 hover:grayscale-0 hover:scale-110 hover:brightness-110"
            />
          </a>
        </div>


        <a href="mailto:sofianeabouabderrahim@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>

      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Sofiane Abou Abderrahim
        </p>

        <div className="flex items-center md:gap-4 gap-6">
          {socialMedia.map(profile => (
            <div
              key={profile.id}
              className="w-14 h-14 md:w-16 md:h-16 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={profile.img} alt={profile.id} className="w-6 h-6 md:w-6 md:h-6" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
