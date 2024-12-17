'use client';
import Link from "next/link";
import { navLinks } from "@/app/data/Links";
import { OtherLinks } from "@/app/data/Links";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(){
    const pathname = usePathname();
    return(
            <nav className="hidden lg:block w-full h-[134px] bg-white">
                <div className="flex w-[100%] h-16 items-center px-5 2xl:px-10">
                    <Link href="/">
                        <h1 className="text-[24px] 2xl:text-[32px] leading-[auto] text-[#22202E] font-poppins">Avion</h1>
                    </Link>
                    <div className="ml-auto mr-[20px] w-[400px] 2xl:w-[300px] h-[22px]">
                        <ul className="flex gap-8 font-poppins text-[#726E8D] leading-[auto]">
                            {navLinks.map(link => {
                                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                                return(
                                    <li key={link.id}>
                                        <Link href={link.href} className="text-[16px] 2xl:text-[20px] leading-[auto] relative flex flex-col group">{link.title}
                                            <span className={isActive ? "h-[2px] inline-block absolute w-full bg-[#726E8D] -bottom-[0.15px]" : "h-[2px] inline-block absolute w-0 bg-[#726E8D] -bottom-[0.15px] group-hover:w-full transition-[width] ease duration-300"}>&nbsp;</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="w-[80px] h-4 flex leading-[auto] items-center gap-[16px]">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[16px] 2xl:text-[20px] text-[#726E8D] cursor-pointer" />
                        <Link href="/cart">
                            <FontAwesomeIcon icon={faCartShopping} className="text-[16px] 2xl:text-[20px] text-[#726E8D]" />
                        </Link>
                        <Link href="">
                            <FontAwesomeIcon icon={faUser} className="text-[16px] 2xl:text-[20px] text-[#726E8D]" />
                        </Link>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full h-16 bg-[#F9F9F9]">
                    <div className="w-[900px] h-[22px]">
                        <ul className="flex items-center justify-center gap-[20px] 2xl:gap-[40px] leading-[auto]">
                            {OtherLinks.map(link => {
                                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                                return(
                                    <li key={link.id} className="text-[16px] 2xl:text-[20px] font-poppins text-[#726E8D]">
                                        <Link href={link.href} className="relative flex flex-col group">{link.title}
                                            <span className={isActive ? "h-[2px] inline-block absolute w-full bg-[#726E8D] -bottom-[0.15px]" : "h-[2px] inline-block absolute w-0 bg-[#726E8D] -bottom-[0.15px] group-hover:w-full transition-[width] ease duration-300"}>&nbsp;</span>
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