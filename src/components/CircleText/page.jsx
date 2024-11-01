"use client"
import Magnetic from '../Magnetic/page'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Sred from '@/assets/img/Sred.png'

const AnimatedCircle = () => {
    const text = "WEBFOLIO - SUCKSEK STUDIO -";
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        setLetters(text.split(''));
    }, [text]);

    return (
        <Magnetic>
            <div className="flex items-center justify-center w-60">
                <div className="relative w-52 h-52 rounded-full flex items-center justify-center overflow-hidden">
                    <div
                        className="absolute w-24 h-24 rounded-full bg-cover"
                    >
                        <Image className="bg-center" alt='Sred' src={Sred} />
                    </div>

                    <div className="absolute w-full h-full flex items-center justify-center">
                        <div className="text-white animate-textRotation">
                            {letters.map((char, i) => (
                                <span
                                    key={i}
                                    className="absolute"
                                    style={{
                                        transform: `rotate(${(i * 360) / letters.length}deg) translateY(-90px)`,
                                        transformOrigin: '0 0',
                                    }}
                                >
                                    {char}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Magnetic>

    );
};

export default AnimatedCircle;
