import { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1 } });
        tl.from(titleRef.current, { y: -50, opacity: 0 })
            .from(subtitleRef.current, { y: -50, opacity: 0 }, "-=0.5")
            .from(buttonRef.current, { scale: 0, opacity: 0 }, "-=0.5");
    }, []);
    
    return (
        <section className="h-screen bg-gradient-to-br from-sky-100 to-indigo-100 flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center p-8">
            <h1 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-4">Villa Parit</h1>
            <p ref={subtitleRef} className="text-lg mb-8">We are glad to have you here.</p>
            <button ref={buttonRef} className="px-4 py-2 bg-blue-500 text-white rounded">Get Started</button>
        </section>
    );
};

export default Hero;