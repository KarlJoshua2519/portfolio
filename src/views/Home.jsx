import React, { useEffect, useState } from 'react';
import karl from '../assets/images/karl.jpg';
import facebook from '../assets/images/facebook.svg'
import ig from '../assets/images/instagram.svg'
import linkedin from '../assets/images/linkedin.svg'
import karl2 from '../assets/images/karl2.png'

const Home = () => {
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
                setSpeed(100);
            }, speed);
        } else {
            typingTimeout = setTimeout(() => {
                setText(currentText.substring(0, text.length + 1));
            }, speed);
        }


        if (!isDeleting && text === currentText) {
            setTimeout(() => setIsDeleting(true), 3000);
        }


        if (isDeleting && text === '') {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(typingTimeout);
    }, [text, isDeleting, currentRole]);

    return (
        <div className="w-full block my-10 p-5">
            <div className="flex items-center justify-center gap-20 p-10">
                <div className="text-secondary block ">
                    <h1 className="text-sm tracking-[0.4em] ">HELLO WORLD, I'M</h1>
                    <h1 className="text-[3em]  font-extrabold">
                        Karl Joshua M. Gonzales
                    </h1>
                    <h1 className="text-3xl text-accent tracking-wider font-bold">
                        <span className="typing">{text}</span>
                        <span className="blinking-cursor">|</span>
                    </h1>

                    <p className=" tracking-wider mt-10 font-light w-[40em]">I develop reliable and efficient web applications, focusing on clean code, seamless user experiences, to meet modern web standards.</p>

                    <h1 className="text-[0.8em] font-extralight tracking-wide mt-20">FIND ME ON:</h1>
                    <div className="flex flex-row gap-3 mt-3">
                        <a href=""><img className=" boxshadow bg-[#171624] px-2 py-1" src={facebook} alt="" /></a>
                        <a href=""><img className="boxshadow bg-[#171624] px-2 py-1" src={ig} alt="" /></a>
                        <a href=""><img className="boxshadow bg-[#171624] px-2 py-1" src={linkedin} alt="" /></a>
                    </div>
                </div>
                <div className="w-auto h-auto">
                    <img className="w-[35em] h-auto " src={karl} alt="Karl Joshua M. Gonzales" />
                </div>

            </div>


            
            <div className="flex items-center justify-center gap-20 p-10 mt-20">
                <div className="w-auto h-auto">
                    <img className="dropshadow w-[35em] h-auto " src={karl2} alt="Karl Joshua M. Gonzales" />
                </div>

                <div className="relative text-secondary">
                    <h1 className=" text-2xl">ABOUT ME</h1>
                    <h1 className="absolute -translate-y-9 -translate-x-3 text-6xl font-extrabold tracking-widest opacity-20">About</h1>
                    <p className=" tracking-wider mt-10 font-light w-[40em]">I develop reliable and efficient web applications, focusing on clean code, seamless user experiences, to meet modern web standards. I develop reliable and efficient web applications, focusing on clean code, seamless user experiences, to meet modern web standards.</p>
                </div>

            </div>



        </div>
    );
};

export default Home;
