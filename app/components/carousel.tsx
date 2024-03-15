'use client'

import Image from "next/image";
import { useEffect, useState } from "react";
import { images } from "../lib/consts";
export default function Carousel({className}: {className: string}) {
    // get classes for width and height from props

    const [image, setImage] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setImage((image) => (image + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);
    return (
        <Image
            src={images[image]}
            className={className+" "+"object-cover transition duration-1000 ease-in-out"}
            alt="Background"
            width={1080}
            height={1080}
        />
    );
}