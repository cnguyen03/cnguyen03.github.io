"use client";
import { TypeAnimation } from 'react-type-animation';

type TextProps = {
    label: string;
};


export default function Text({ label }: TextProps) {
    if (label === "about") {

        return <div className="font-lato text-xl my-8">
            <div className="flex mb-2">I'm Calvin Nguyen,{" "}
            <TypeAnimation sequence={[" an incoming new graduate 🎓!", 2000, " a software developer 💻!", 2000, "a coffee lover ☕!", 2000, "a gym go-er 🏋️!", 2000, "a basketball enjoyer 🏀!", 2000]} speed={50} deletionSpeed={75} repeat={Infinity} className="ml-1"></TypeAnimation>
            </div>
            <p>Currently a senior at UC Irvine pursuing a Bachelor's of Science in Computer Science, I have a deep passion for {" "}<span className="font-bold">crafting software solutions and intelligent systems that make a tangible impact on people’s lives.</span> My academic background has provided me with a strong foundation in Computer Science fundamentals, which I have applied to solve real-world challenges.</p>
            <p className="my-2">
                I have a professional background in full stack software development, intelligent systems, and machine learning, with hands-on experience in industries such as healthcare and aerospace. My work includes building innovative tools to streamline workflows, optimize decision-making, and enhance operational and product efficiency.
            </p>
            <p className="">
                Beyond technical skills, I enjoy breaking down complex problems into digestible solutions and fostering a culture of continuous improvement. Whether it's optimizing processes, building intelligent tools, or tackling complex challenges, I strive to use technology to make a meaningful difference.
            </p>
        </div>;
    }
};