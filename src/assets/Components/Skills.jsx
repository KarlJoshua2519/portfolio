import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import css from '../images/css.png'
import html from '../images/html.png'

import laravel from '../images/laravel.png'
import mongodb from '../images/mongodb.png'
import php from '../images/php.svg'
import node from '../images/node.png'

import mui from '../images/mui.png'
import csharp from '../images/csharp.png'
import kotlin from '../images/kotlin.png'
import swift from '../images/swift.png'
import tailwind from '../images/tailwind.png'
import python from '../images/python.png'
const images = [html, css, tailwind, mui, kotlin, swift, python, csharp, mongodb, php, node, laravel];

const skills = [
    {
        category: "Core Web Skills",
        items: [
            { name: "HTML" },
            { name: "CSS" },
            { name: "JavaScript"},
            { name: "React.js" }
        ]
    },
    {
        category: "Back-end Skills",
        items: [
            { name: "Laravel" },
            { name: "PHP" },
            { name: "Node.js" },
            { name: "MongoDB" },
            { name: "ASP.Net" },
            { name: "C#" }
        ]
    },
    {
        category: "UI Libraries",
        items: [
            { name: "Tailwind CSS" },
            { name: "Material UI" }
        ]
    },
    {
        category: "Mobile Development",
        items: [
            { name: "Swift" },
            { name: "Kotlin"}
        ]
    }
];

export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [showMore, setShowMore] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="flex flex-col mt-20 relative px-4 md:px-0">
            {/* Background Elements for Rich Aesthetics */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />

            <p className="text-accent font-light tracking-wide uppercase">My Expertise</p>
            <h1 className="text-secondary text-5xl font-bold tracking-wide text-glow mb-6">
                Skills & Technologies
            </h1>
            <p className="text-lg font-extralight roboto tracking-wide max-w-2xl text-gray-300 leading-relaxed mb-12">
                I cultivate a diverse ecosystem of tools and languages, carefully selecting the right technology to craft robust, scalable, and intuitive digital experiences.
            </p>

            <div className="flex flex-col lg:flex-row gap-16 w-full">

                {/* Skills List */}
                <div ref={ref} className="flex-1 flex flex-col gap-8">
                    {skills.slice(0, 2).map((skillCategory, idx) => (
                        <div key={idx}>
                            <h3 className="text-white text-xl font-semibold mb-4 border-l-4 border-[#FFC857] pl-3">
                                {skillCategory.category}
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {skillCategory.items.map((skill, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                                        className="bg-[#171624] border border-gray-800 p-4 rounded-xl flex items-center justify-center text-center shadow-lg"
                                    >
                                        <span className="text-gray-300 font-medium">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}

                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: showMore ? 'auto' : 0, opacity: showMore ? 1 : 0 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        {skills.slice(2).map((skillCategory, idx) => (
                            <div key={idx} className="mb-8 mt-8">
                                <h3 className="text-white text-xl font-semibold mb-4 border-l-4 border-[#FFC857] pl-3">
                                    {skillCategory.category}
                                </h3>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                    {skillCategory.items.map((skill, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 200, 87, 0.1)" }}
                                            className="bg-[#171624] border border-gray-800 p-4 rounded-xl flex items-center justify-center text-center shadow-lg hover:border-[#FFC857]/50 transition-all cursor-default group"
                                        >
                                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                                                {skill.name}
                                            </span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>

                    <button
                        className="text-[#171624] font-bold py-3 px-8 rounded-full bg-[#FFC857] hover:bg-[#ffda85] hover:shadow-[0_0_15px_rgba(255,200,87,0.5)] transition-all self-start mt-4"
                        onClick={() => setShowMore(!showMore)}
                    >
                        {showMore ? 'Show Less' : 'Show More Skills'}
                    </button>
                </div>

                {/* Image Carousel / Visual */}
                <div className="flex-1 flex justify-center items-start lg:mt-10">
                    <div className="relative w-full max-w-md aspect-square bg-gradient-to-br from-[#171624] to-[#1f1e31] p-8 rounded-3xl border border-gray-800 shadow-2xl flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                        <div className="w-full h-full relative z-10">
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt="Technology Icon"
                                    className={`absolute inset-0 w-full h-full object-contain p-8 drop-shadow-2xl transition-all duration-1000 transform ${index === currentImageIndex ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 rotate-12'}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
