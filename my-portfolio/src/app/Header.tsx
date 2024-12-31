"use client";
import Typical from 'react-typical'
export default function Header() {
    return (
      <div className="absolute font-playfair text-5xl font-bold">
        <Typical
        steps={["hello,", 1000, "hello, i'm calvin nguyen"]}
        wrapper="p"
        />
      </div>
    );
  }
  