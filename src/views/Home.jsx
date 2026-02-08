import React, { useEffect, useState } from 'react';

import facebook from '../assets/images/facebook.svg'
import ig from '../assets/images/instagram.svg'
import linkedin from '../assets/images/linkedin.svg'
import karl2 from '../assets/images/karl4.png'
import Expertise from '../assets/Components/Expertise';
import Skills from '../assets/Components/Skills';

const Home = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const roles = ["Software Developer", "Web Developer", "Mobile App Developer"];
    const [text, setText] = useState('');
    const [currentRole, setCurrentRole] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [speed, setSpeed] = useState(300);

    useEffect(() => {
  let typingTimeout;
  const currentText = roles[currentRole];

  if (isDeleting) {
    typingTimeout = setTimeout(() => {
      setText(currentText.substring(0, text.length - 1));
    }, 80 + Math.random() * 50); // random speed for realism
  } else {
    typingTimeout = setTimeout(() => {
      setText(currentText.substring(0, text.length + 1));
    }, 120 + Math.random() * 100); // slightly slower typing
  }

  // Pause before deleting
  if (!isDeleting && text === currentText) {
    setTimeout(() => setIsDeleting(true), 2000);
  }

  // Move to next word after deleting
  if (isDeleting && text === "") {
    setIsDeleting(false);
    setCurrentRole((prev) => (prev + 1) % roles.length);
  }

  return () => clearTimeout(typingTimeout);
}, [text, isDeleting, currentRole]);


    return (
        <div className="w-full my-10 p-5 flex flex-col items-center">
            <div className="lg:w-[70em]  flex flex-col ">
                <div className="flex lg:flex-row md:flex-row  flex-col-reverse items-center justify-center w-full gap-20 ">
                    <div className="text-secondary ">
                        <h1 className="text-sm tracking-[0.4em] ">HELLO WORLD, I'M</h1>
                        <h1 className="text-4xl  font-extrabold">
                            Karl Joshua M. Gonzales
                        </h1>
                        <h1 className="text-2xl text-accent tracking-wider flex items-center font-bold">
                            <span className="typing">{text}</span>
                            <span className="blinking-cursor">|</span>
                        </h1>

                        <p className=" tracking-wider mt-10 text-lg roboto font-extralight ">I develop reliable and efficient web applications, focusing on clean code, seamless user experiences, to meet modern web standards.</p>

                        <h1 className="text-[0.8em] font-extralight tracking-wide mt-20">FIND ME ON:</h1>
                        <div className="flex flex-row gap-3 mt-3">
                            <a href=""><img className=" boxshadow  bg-[#171624] px-2 py-1 rounded-md" src={facebook} alt="" /></a>
                            <a href=""><img className=" boxshadow bg-[#171624] px-2 py-1 rounded-md" src={ig} alt="" /></a>
                            <a href=""><img className=" boxshadow bg-[#171624] px-2 py-1 rounded-md" src={linkedin} alt="" /></a>
                        </div>
                    </div>

                    <div className="relative w-[55em] ">
                        <div className="relative z-20">
                            <img className="w-full z-30  rounded-full" src={karl2} alt="Karl Joshua M. Gonzales" />
                        </div>

                        <div className="absolute boxshadow right-[18%] -bottom-0.5  translate-x-[5em] bg-[#171624] w-[28em] h-[28em] rounded-full"></div>


                    </div>


                </div>

                <section className="w-full flex min-h-screen mt-32 justify-center flex-col">
                    <h1 className="font-light text-accent tracking-wide mb-4">About Me</h1>
                    <p className="text-white font-medium tracking-wide leading-[1.4em] text-4xl">I'm a dedicated software developer who loves crafting code, spending quality time with my wife, and diving into creative projects during my free time.</p>
                    <div className="flex flex-row justify-between mt-20">
                        <h1 data-aos="fade-right" className="flex-1 text-accent roboto text-4xl">
                            I design, and create Website & Mobile App
                        </h1>

                        <div data-aos="fade-left" className="flex flex-1 text-white font-light tracking-wider flex-col gap-10">
                            <p className="roboto">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat quisquam, mollitia illum, molestias consequuntur error eius quas a cupiditate, alias veritatis harum explicabo deleniti earum ullam fugiat est possimus?
                            </p>

                            <p className="roboto">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat quisquam, mollitia illum, molestias consequuntur error eius quas a cupiditate, alias veritatis harum explicabo deleniti earum ullam fugiat est possimus?
                            </p>


                            <div className={`roboto transition-all duration-500 ${isExpanded ? "max-h-full" : "max-h-20 overflow-hidden relative"}`}>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat quisquam, mollitia illum, molestias consequuntur error eius quas a cupiditate, alias veritatis harum explicabo deleniti earum ullam fugiat est possimus?
                                </p>
                                {!isExpanded && (
                                    <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#12111C] to-transparent"></div>
                                )}
                            </div>


                            <button
                                className=" px-4 py-2 rounded-md font-bold hover:bg-[#12111C] text-accent hover:text-white transition-all duration-300 cursor-pointer"
                                onClick={() => setIsExpanded(!isExpanded)}
                            >
                                {isExpanded ? "Show Less" : "Show More"}
                            </button>
                        </div>
                    </div>

                </section>


                <Expertise />

                <Skills />

            </div>
        </div>
    );
};

export default Home;
