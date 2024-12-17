import { brand } from "@/app/data/brand";
import Image from "next/image";

export default function Brand(){
    return(
        <main className="flex flex-col gap-12 py-[60px] lg:py-10 2xl:mt-80 items-center w-full h-auto xl:h-[355px] bg-white">
            <h1 className="font-poppins text-[24px] 2xl:text-[42px] leading-[140%] text-center">What makes our brand different</h1>
            <div className="justify-center lg:justify-start lg:px-[65px] flex flex-wrap gap-10">
                {brand.map(brand => {
                    return(
                        <div className="w-[270px] 2xl:w-[500px] h-[124px] cursor-pointer" key={brand.id}>
                            <Image 
                                src={brand.src}
                                alt=""
                                width={24}
                                height={24}
                            />
                            <h4 className="mt-5 font-poppins text-[20px] 2xl:text-[32px] leading-[140%]">{brand.heading}</h4>
                            <p className="mt-5 text-[16px] 2xl:text-[24px] font-poppins leading-[150%]">{brand.content}</p>
                        </div>
                    );
                })}
            </div>
        </main>
    );
}