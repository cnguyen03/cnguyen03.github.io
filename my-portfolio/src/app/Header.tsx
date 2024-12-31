"use client";
import { TypeAnimation } from 'react-type-animation';
export default function Header() {
    return (
      <div className="absolute font-playfair text-5xl font-bold">
        <TypeAnimation sequence={["hello,", 1000, "hello, i'm calvin nguyen"]}></TypeAnimation>

      </div>
    );
  }
  