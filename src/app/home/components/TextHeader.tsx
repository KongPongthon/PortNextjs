'use client';
import { useEffect, useRef } from "react";
import Typed from "typed.js";

interface Props {
    firsttext: string;
    secondtext: string;
    thirdtext?: string;
}

export default function TextHeader({ firsttext, secondtext, thirdtext }: Props) {
    const el = useRef(null);
    if (!el.current) return null

    useEffect(() => {
        const strings = [firsttext, secondtext];
        if (thirdtext) strings.push(thirdtext);

        const typed = new Typed(el.current, {
            strings,
            typeSpeed: 80,
            backSpeed: 50,
            loop: true,
        });

        return () => typed.destroy();
    }, [firsttext, secondtext, thirdtext]);

  return <span ref={el} className="text-2xl font-bold text-blue-600"></span>;
}