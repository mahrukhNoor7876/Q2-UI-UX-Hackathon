import { ceramic } from "@/app/data/ceramic";
import Image from "next/image";

export default function Ceramics(){
    return(
        <section className="flex flex-col w-full h-auto py-[20px] lg:px-[40px] 2xl:px-[80px] bg-white">
            <h1 className="text-[25px] text-center lg:text-left lg:text-[32px] 2xl:text-[52px] text-[#2A254B] leading-[auto]">New ceramics</h1>
            <div className="mt-10 flex flex-wrap justify-center xl:justify-start gap-5 w-full h-auto">
                {ceramic.map(ceramic => {
                    return(
                         <div className="w-[300px] 2xl:w-[500px] h-auto flex flex-col gap-[24px] cursor-pointer border-black hover:border-[1px] duration-300" key={ceramic.id}>
                            <Image 
                                src={ceramic.src}
                                alt=""
                                width={305}
                                height={375}
                                className="2xl:hidden"
                            />
                            <Image 
                                src={ceramic.src}
                                alt=""
                                width={500}
                                height={375}
                                className="hidden 2xl:block"
                            />
                            <div className="flex flex-col gap-[8px] w-[154px] 2xl:w-[250px] h-[63px]">
                                <p className="text-[20px] 2xl:text-[32px] leading-[140%] font-poppins text-[#2A254B]">{ceramic.title}</p>
                                <p className="text-[18px] 2xl:text-[30px] leading-[150%] font-poppins text-[#2A254B]">{ceramic.price}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className="self-center my-12 w-[170px] 2xl:w-[270px] h-[56px] 2xl:h-[70px] px-[22px] py-[16px] bg-[#F9F9F9] border-[1px] border-[#4E4D93] text-[16px] 2xl:text-[26px] hover:bg-[#4E4D93] hover:text-white duration-300 leading-[150%] text-[#2A254B] font-poppins">View collection</button>
        </section>
    );
}