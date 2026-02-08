import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import webdev from '../images/webdev.svg'
import webdesign from '../images/webdesign.svg'
import mobile from '../images/mobiledev.svg'
const Expertise = () => {
   useEffect(() => {
      AOS.init({
        duration: 1000,    
        offset: 100,      
        easing: 'ease-in-out', 
        once: false,
        mirror: true,      
      });
    }, []);
  
  return (
    <section className="w-full my-10 flex flex-col">
    <p data-aos="fade-left" className="text-accent font-light tracking-wide ">Features</p>
    <h1 data-aos="fade-left" className="text-secondary text-4xl font-bold tracking-wide text-glow">
        My Expertise
    </h1>

    <div data-aos="fade-up" className="grid grid-cols-3 gap-10 mt-20">

        <div  className="bg-[#171624] p-6 flex flex-col rounded-xl boxshadow2">
           <img className="w-[3em] mb-4" src={webdev} alt="" />
           <h1 className="text-white font-medium text-xl mb-2">Web Development</h1>
           <p className="text-white font-extralight roboto tracking-wider text-sm leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente ut, modi cupiditate fugiat asperiores repellendus enim labore nihil dolorum.</p>

        </div>

        <div className="bg-[#171624] p-6 flex flex-col rounded-xl boxshadow2">
           <img className="w-[3em] mb-4 " src={webdesign} alt="" />
           <h1 className="text-white font-medium text-xl mb-2">Web Design</h1>
           <p className="text-white font-extralight roboto tracking-wider text-sm leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente ut, modi cupiditate fugiat asperiores repellendus enim labore nihil dolorum.</p>

        </div>

        <div className="bg-[#171624] p-6 flex flex-col rounded-xl boxshadow2">
           <img className="w-[3em] mb-4" src={mobile} alt="" />
           <h1 className="text-white font-medium text-xl mb-2">Mobile Development</h1>
           <p className="text-white font-extralight roboto tracking-wider text-sm leading-relaxed">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente ut, modi cupiditate fugiat asperiores repellendus enim labore nihil dolorum.</p>

        </div>


     
    </div>

</section>

  )
}

export default Expertise
