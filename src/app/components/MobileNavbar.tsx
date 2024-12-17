'use client';
import Link from "next/link";
import { navLinks } from "@/app/data/Links";
import { OtherLinks } from "@/app/data/Links";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faMagnifyingGlass, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from "next/navigation";

export default function MobileNavbar(){
    
    const pathname = usePathname();

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    return(
        <nav className="lg:hidden w-full h-[134px] bg-white">
            <div className="flex w-full h-16 items-center px-5">
                <div className="w-full h-8 flex ">
                    <Link href="/">
                        <h1 className="text-[24px] leading-[auto] text-[#22202E] font-poppins">Avion</h1>
                    </Link>
                    <div className="flex gap-5 ml-auto mr-5 mt-1">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[14px] mt-[6px] text-[#22202E]" />
                        <Link href="/cart">
                            <FontAwesomeIcon icon={faCartShopping} className="text-[14px] text-[#22202E]" />
                        </Link>
                        <Link href="">
                            <FontAwesomeIcon icon={faUser} className="text-[14px] text-[#22202E]" />
                        </Link>
                    </div>
                </div>
                <div className="ml-auto">
                    {nav ? (
                        <div className={`absolute w-[250px] h-screen shadow-lg bg-white top-0 right-0 transition-all duration-300 transform ${nav ? "right-0" : "right-[-100%]"}`}>
                            <FontAwesomeIcon
                                icon={faXmark}
                                className="cursor-pointer absolute top-5 right-5 text-[16px] text-[#22202E]"
                                onClick={handleNav}
                            />
                            <ul className="absolute top-[60px] mx-5 text-[16px] text-[#726E8D]">
                                {navLinks.map(link => {
                                    const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                                    return(
                                        <li key={link.id} className="mt-2">
                                            <Link href={link.href} className="leading-[auto] relative flex flex-col group">{link.title}
                                                <span className={isActive ? "h-[2px] inline-block absolute w-full bg-[#726E8D] -bottom-[0.15px]" : "h-[2px] inline-block absolute w-0 bg-[#726E8D] -bottom-[0.15px] group-hover:w-full transition-[width] ease duration-300"}>&nbsp;</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ) : (
                        <FontAwesomeIcon
                            icon={faBars}
                            className="cursor-pointer text-[16px] text-[#22202E]"
                            onClick={handleNav}
                        />
                    )}
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-16 bg-[#F9F9F9]">
                <div className="w-full max-w-[803px] h-[22px] overflow-x-auto scrollbar-hidden">
                    <ul className="mx-2 flex items-center justify-start sm:justify-center gap-[20px] leading-[auto] whitespace-nowrap">
                        {OtherLinks.map(link => {
                            const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                            return(
                                <li key={link.id} className="text-[14px] font-poppins text-[#726E8D]">
                                    <Link href={link.href} className="flex flex-col group">{link.title}
                                            <span className={isActive ? "h-[2px] inline-block w-full bg-[#726E8D] -bottom-[0.15px]" : "h-[2px] inline-block w-0 bg-[#726E8D] -bottom-[0.15px] group-hover:w-full transition-[width] ease duration-300"}>&nbsp;</span>
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>  
            </div>
        </nav>
    );
}
