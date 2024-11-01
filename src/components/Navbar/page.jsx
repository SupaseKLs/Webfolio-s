'use client';
import { useState } from 'react';
import Image from 'next/image';
import Logo from '@/assets/img/S.png';
import Btn_Resume from '../btn-resume/page';

import Pencil from '@/assets/svg/pencil.svg';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    const navLinks = [
        { title: 'About', href: '/' },
        { title: 'Project', href: '/' },
        { title: 'Contact', href: '/' },
    ];

    return (
        <>
            <nav className='text-white h-24'>
                <div className="max-w-screen-lg mx-auto">
                    <div className='h-24 hidden md:flex justify-between items-center md:px-10 uppercase text-xl'>
                        <div className="flex">
                            <Image src={Logo} width={70} height={70} alt='logo' />
                        </div>
                        <ul className='flex'>
                            <li><Link className='mx-4' href="/">About</Link></li>
                            <li><Link className='mx-4' href="/">Project</Link></li>
                            <li><Link className='mx-4' href="/">Contact</Link></li>
                        </ul>
                        <Btn_Resume />
                    </div>
                </div>

                <div className='cursor-pointer md:hidden flex items-center justify-between p-6'>
                    <Image src={Logo} width={70} height={70} alt='logo' />
                    <div className="text-md font-bold" onClick={toggleMenu}>Menu</div>
                </div>
            </nav>
            <AnimatePresence>
                {open && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="origin-top fixed left-0 top-0 w-full h-screen bg-black bg-opacity-30 backdrop-blur-md text-white p-6">
                        <div className="flex h-full flex-col">
                            <div className='md:hidden flex justify-end items-center'>
                                <div className="cursor-pointer text-md font-bold" onClick={toggleMenu}>Close</div>
                            </div>
                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className='flex flex-col h-full justify-center items-center '>
                                {
                                    navLinks.map((link) => {
                                        return (
                                            <div className="overflow-hidden pt-2" key={link.title}> {/* Key added here */}
                                                <MobileNavLink
                                                    title={link.title}
                                                    href={link.href}
                                                />
                                            </div>
                                        );
                                    })
                                }
                                <motion.ul
                                    className='flex items-center border-2 border-white px-6 py-1 mt-6 rounded-full'
                                    initial={{ opacity: 0 }} // Start invisible
                                    animate={{ opacity: 1 }}  // Fade in
                                    exit={{ opacity: 0 }}     // Fade out on exit
                                    transition={{ duration: 0.8 }} // Duration of the fade-in/out
                                >
                                    <li>
                                        <Link href="">Resume</Link>
                                    </li>
                                    <Image className='ml-4' src={Pencil} width={20} height={20} alt='pencil' />
                                </motion.ul>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const mobileLinkVars = {
    initial: {
        y: "30vh",
        transition: {
            duration: 0.5,
            ease: [0.37, 0, 0.63, 1],
        },
    },
    open: {
        y: 0,
        transition: {
            ease: [0, 0.55, 0.45, 1],
            duration: 0.7,
        },
    },
};

const MobileNavLink = ({ title, href }) => {
    return (
        <motion.div variants={mobileLinkVars} className="text-4xl uppercase text-white">
            <Link href={href}>{title}</Link>
        </motion.div>
    );
};

export default Navbar;
