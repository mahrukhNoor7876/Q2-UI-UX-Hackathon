'use client'
import { footerLinks } from "@/app/data/footerLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faLinkedin, faFacebook, faInstagram, faSkype, faTwitter, faPinterest } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer(){
    const pathname = usePathname();
    return(
        <footer className="w-full lg:h-[380px] h-auto bg-[#2A254B] px-5 sm:px-20 pt-40 sm:pt-20">
            <div className="w-full lg:h-[260px] h-auto flex flex-wrap gap-10 sm:gap-[70px] lg:gap-10 xl:gap-[70px] border-b-[2px] border-[#4E4D93]">
                {footerLinks.map(link => {
                    return(
                        <div className="w-[115px] h-[260px]" key={link.id}>
                            <p className="text-[16px] text-white font-poppins mb-2">{link.lable}</p>
                            <ul className="font-poppins text-[14px] text-white flex flex-col gap-[12px]">
                                {link.links.map(link => {
                                    const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                                    return(
                                        <li>
                                            <Link key={link.lable} href={link.href} className="relative flex flex-col group">{link.lable}
                                                <span className={isActive ? "h-[2px] inline-block absolute w-[45%] bg-white -bottom-1" : "h-[2px] inline-block absolute w-0 bg-white -bottom-1 group-hover:w-[45%] transition-[width] ease duration-300"}>&nbsp;</span>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
                <div className="w-auto xl:w-[200px] h-[260px]">
                    <h1 className="text-white text-[20px] leading-[auto] font-poppins mb-5">Join our mailing list</h1>
                    <div className="w-auto xl:w-[627px] h-[56px] flex ">
                        <div className="w-auto xl:w-[509px] h-[56px] bg-[#FFF] bg-opacity-[15%] border-[1px] border-[#4E4D93]">
                            <input type="text" placeholder="your@email.com" className="w-auto xl:w-[509px] h-[56px] text-[#FFF] text-[12px] lg:text-[16px] leading-[auto] font-poppins bg-transparent p-2 px-5" />
                        </div>
                        <button className="w-[100px] xl:w-[118px] h-[56px] bg-[#FFF] border-[1px] border-[#4E4D93]    flex items-center justify-center hover:bg-[#4E4D93] duration-300 font-poppins text-center leading-[150%] text-[12px] lg:text-[16px] text-[#2A254B] hover:text-white">Sign up</button>
                    </div>
                </div>
            </div>
            <div className="w-full h-[40px] flex justify-center items-center">
                <p className="text-[14px] leading-[auto] text-white font-poppins">Copyright 2022 Avion LTD</p>
                <div className="hidden w-[70px] h-[40px] sm:flex gap-5 items-center ml-auto mr-40">
                    <FontAwesomeIcon icon={faLinkedin} className="w-[24px] h-[24px] text-white cursor-pointer" />
                    <FontAwesomeIcon icon={faFacebook}  className="w-[24px] h-[24px] text-white cursor-pointer" />
                    <FontAwesomeIcon icon={faInstagram}  className="w-[24px] h-[24px] text-white cursor-pointer" />
                    <FontAwesomeIcon icon={faSkype}  className="w-[24px] h-[24px] text-white cursor-pointer" />
                    <FontAwesomeIcon icon={faTwitter}  className="w-[24px] h-[24px] text-white cursor-pointer" />
                    <FontAwesomeIcon icon={faPinterest} className="w-[24px] h-[24px] text-white cursor-pointer" />
                </div>
            </div>
        </footer>
    );
}