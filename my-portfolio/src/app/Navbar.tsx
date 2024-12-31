import React, { useState, useEffect } from "react";

type NavbarProps = {
    aboutRef: React.RefObject<HTMLDivElement | null>;
    educationRef: React.RefObject<HTMLDivElement | null>;
    workExperienceRef: React.RefObject<HTMLDivElement | null>;
    projectsRef: React.RefObject<HTMLDivElement | null>;
};

export default function Navbar({
    aboutRef,
    educationRef,
    workExperienceRef,
    projectsRef,
}: NavbarProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Show navbar when scrolling up, hide when scrolling down
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false); // Hide on scroll down
            } else {
                setIsVisible(true); // Show on scroll up
            }

            setLastScrollY(currentScrollY);
        };

        // Attach scroll listener
        window.addEventListener("scroll", handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const handleScrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div
            className={`fixed top-0 w-full z-10 bg-quarter-spanish-white py-5 transition-transform duration-300 ${
                isVisible ? "translate-y-0" : "-translate-y-full"
            }`}
        >
            <div className="flex justify-center font-playfair text-2xl">
                <div className="flex items-center flex-col">
                    <div
                        className="mx-4 cursor-pointer relative group"
                        onClick={() => handleScrollTo(aboutRef)}>
                    about
                        <div className="absolute left-0 right-0 mx-auto mt-1 h-1 w-1 bg-limed-oak opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                    </div>
                </div>

                <div className="flex items-center flex-col">
                    <div
                        className="mx-4 cursor-pointer relative group"
                        onClick={() => handleScrollTo(educationRef)}>
                    education
                        <div className="absolute left-0 right-0 mx-auto mt-1 h-1 w-1 bg-limed-oak opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center flex-col">
                    <div
                        className="mx-4 cursor-pointer relative group"
                        onClick={() => handleScrollTo(workExperienceRef)}>
                    work experience
                        <div className="absolute left-0 right-0 mx-auto mt-1 h-1 w-1 bg-limed-oak opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center flex-col">
                    <div
                        className="mx-4 cursor-pointer relative group"
                        onClick={() => handleScrollTo(projectsRef)}>
                    projects
                        <div className="absolute left-0 right-0 mx-auto mt-1 h-1 w-1 bg-limed-oak opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                    </div>
                </div>
                <div className="flex items-center flex-col">
                <div className="mx-4 cursor-pointer relative group">
                    <a href="https://drive.google.com/file/d/18Fbt7zLpwPueTzG5B2Fp41OauiOxapZl/view?usp=sharing" target="_blank" rel="noopener noreferrer"> resume</a>
                    <div className="absolute left-0 right-0 mx-auto mt-1 h-1 w-1 bg-limed-oak opacity-0 group-hover:opacity-100 transition-opacity rounded-full"></div>
                </div>
                </div>
            </div>
        </div>
    );
}
