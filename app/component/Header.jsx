"use client";

import { useState, useCallback, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import { IoPawSharp } from "react-icons/io5";
import { FaBus } from "react-icons/fa";
import { FaTaxi } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isSticky, setIsSticky] = useState(false);
    const [isLoading, setIsLoading] = useState(false); // For pre-loader

    const toggleMobileMenu = useCallback(() => {
        setMobileMenuOpen((prev) => !prev);
    }, []);

    const handleDropdownToggle = useCallback((menuKey) => {
        setActiveDropdown((prev) => (prev === menuKey ? null : menuKey));
    }, []);

    const handleLinkClick = useCallback((hasSubMenu, menuKey) => {
        if (hasSubMenu) {
            handleDropdownToggle(menuKey); // Toggle the dropdown
        } else {
            setIsLoading(true); // Start loading when a link is clicked
            setMobileMenuOpen(false); // Close mobile menu
            setTimeout(() => {
                setIsLoading(false); // Stop loading after a short delay
            }, 1000); // Adjust the delay as per your need
        }
    }, [handleDropdownToggle]);

    const menuItems = useMemo(
        () => ({
            home: { icon: <FaHome />, label: 'Home', link: '/' },
            safari: {
                icon: <IoPawSharp />,
                label: 'Safari',
                link: '#',
                subMenu: [
                    { label: 'Leopard Safari', link: '/leopardsafari' },
                ],
            },
            tour: {
                icon: <FaBus />,
                label: 'Tour',
                link: '/#',
                subMenu: [
                    { label: 'One day tour', link: '/onedaytour' },
                    { label: 'Two day tour', link: '/twodaytour' },
                ],
            },
            taxi: { icon: <FaTaxi />, label: 'Book a Taxi', link: '/taxi' },
            contactus: { icon: <MdPermContactCalendar />, label: 'Contact Us', link: '/contact' },
        }),
        []
    );

    const renderMenuItems = (isMobile = false) => (
        <>
            {Object.entries(menuItems).map(([key, item]) => (
                <div key={key} className={`relative ${isMobile ? 'mt-2 p-2' : 'group md:px-5'}`}>
                    <Link
                        href={item.link}
                        className="flex md:flex-col lg:flex-col items-center font-semibold p-2 rounded text-[#e03f64] lg:text-lg md:text-xs"
                        onClick={(e) => {
                            if (item.subMenu) {
                                e.preventDefault(); // Prevent default only for items with submenus
                                handleLinkClick(!!item.subMenu, key);
                            } else {
                                setIsLoading(true); // Start pre-loader
                                setMobileMenuOpen(false); // Close mobile menu
                                // Allow the link to navigate
                                setTimeout(() => setIsLoading(false), 1000);
                            }
                        }}
                    >
                        <span className="mx-2">{item.icon}</span>{item.label}
                    </Link>
                    {item.subMenu && activeDropdown === key && (
                        <ul
                            className={`${
                                isMobile ? 'space-y-2 pl-4' : 'absolute left-0 top-12 w-40 bg-white shadow-lg rounded'
                            } ${isMobile ? '' : 'hidden group-hover:block z-[999999]'}`}
                        >
                            {item.subMenu.map((subItem, index) => (
                                <li key={index}>
                                    <Link
                                        href={subItem.link}
                                        className="block px-4 py-2 hover:bg-[#fff5f8] rounded"
                                        onClick={() => {
                                            setIsLoading(true); // Trigger pre-loader for submenu links
                                            setMobileMenuOpen(false); // Close menu
                                            setTimeout(() => setIsLoading(false), 1000);
                                        }}
                                    >
                                        {subItem.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </>
    );

    // Handle scroll event to add sticky class
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className='z-50 bg-white bg-opacity-90'>
            <div className="hidden sm:hidden md:flex lg:flex justify-between bg-[#e03f64] p-4">
                <div className="sm:hidden md:flex items-center">
                    <Link href="#" className='flex text-[20px] mx-2 text-white'>
                        <FaFacebook />
                    </Link>
                    <Link href="#" className='flex text-[20px] text-white mx-2'>
                        <FaInstagram />
                    </Link>
                    <Link href="https://wa.me/+917790966554" className='flex text-[20px] text-white mx-2'>
                        <FaWhatsapp />
                    </Link>
                </div>

                <div className="sm:hidden md:flex items-center">
                <Link href="tel:+91-7790966554" className='flex text-[16px] text-white'>
                        <span className='pt-1 mx-1'><IoMdCall /> </span> <span>+91-7790966554</span>
                    </Link>
                    <Link href="tel:+91-9928062034" className='flex text-[16px] text-white'>
                        <span className='pt-1 mx-1'><IoMdCall /> </span> <span>+91-9928062034</span>
                    </Link>
                    
                    <Link href="mailto:espindotour@gmail.com" className='flex text-[16px] text-white'>
                        <span className='pt-1 mx-1'><IoIosMail /> </span>  <span>espindotour@gmail.com </span>
                    </Link>
                </div>
            </div>

            <nav className={`flex items-center p-2 scroll justify-between sm:justify-between md:justify-start lg:justify-start ${isSticky ? 'fixed top-0 w-full shadow-md z-50 bg-white' : ''}`}>
                <div className="w-1/4 flex">
                    <Link href="/" className="text-2xl font-bold">
                        <Image src="/espindo-new-logo.png" alt="Logo" width={160} height={40} quality={75} priority={true} />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="lg:w-[60%] hidden md:flex justify-evenly w-auto md:w-auto sm:w-auto">
                    <ul className="flex justify-between w-full">
                        {renderMenuItems()}
                    </ul>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </nav>

            {/* Pre-loader */}
            {isLoading && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-30">
                    <div className="text-white"><Image src="/loading.gif" width={64} height={64} alt="loading"/></div>
                </div>
            )}

            {/* Mobile Overlay */}
            {isMobileMenuOpen && (
                <div onClick={toggleMobileMenu} className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>
            )}

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="fixed top-0 right-0 h-full w-9/12 bg-white shadow-lg z-20 p-4 transition-transform">
                    <div className="pb-5 border-b">
                        <Image src="/espindo-new-logo.png" width={80} height={20} alt="Mobile Logo" />
                        <button onClick={toggleMobileMenu} className="absolute top-4 right-4 text-xl font-semibold text-gray-600 focus:outline-none">
                            X
                        </button>
                    </div>
                    <nav className="flex flex-col mt-4">
                        {renderMenuItems(true)}
                        <div className="w-full flex justify-center pt-5 border-t mt-5">
                            <Link href="#" className="w-3/5 bg-[#F4839D] text-white font-semibold py-2 px-4 rounded text-center hover:bg-[#e03f64] transition duration-300">
                                Contact Us
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
