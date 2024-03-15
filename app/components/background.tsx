'use client'

import Image from "next/image";
import { backgrounds } from "../lib/consts";

export default function Background() {
    return (
        <Image
            src={backgrounds[0]}
            className="fixed inset-0 z-[-1] h-dvh w-dvw object-cover transition duration-1000 ease-in-out"
            alt="Background"
            width={1080}
            height={1080}
        />
    );
}