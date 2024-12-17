import { popularProducts } from "@/app/data/popularProduct";
import Image from "next/image";

export default function PopularProducts(){
    return(
        <section className="flex flex-col w-full h-auto p-[20px] lg:px-[45px] 2xl:px-[85px] bg-white">
            <h1 className="text-[25px] lg:text-[32px] 2xl:text-[52px] text-center lg:text-left leading-[140%] font-poppins text-[#2A254B]">Our popular products</h1>
            <div className="mt-10 flex justify-center xl:justify-start flex-wrap w-full gap-5 h-auto">
                {popularProducts.map(popularProduct => {
                    return(
                        <div key={popularProduct.id} className="w-auto h-auto flex flex-col gap-[24px] duration-300 cursor-pointer border-black hover:border-[1px]">
                            <Image 
                                src={popularProduct.src}
                                alt=""
                                width={popularProduct.width}
                                height={375}
                                className="2xl:hidden"
                            />
                            <Image 
                                src={popularProduct.src}
                                alt=""
                                width={popularProduct.xl_2width}
                                height={375}
                                className="hidden 2xl:block"
                            />
                            <div className="flex flex-col gap-[8px] w-[209px] 2xl:w-[350px] h-[63px]">
                                <p className="text-[20px] 2xl:text-[32px] leading-[140%] font-poppins text-[#2A254B]"> {popularProduct.title}</p>
                                <p className="text-[18px] 2xl:text-[30px] leading-[150%] font-poppins text-[#2A254B]">{popularProduct.price}</p>
                            </div>
                        </div>                        
                    );
                })}
            </div>
            <button className="self-center my-16 w-[170px] 2xl:w-[270px] h-[56px] 2xl:h-[70px] px-[22px] py-[16px] bg-[#F9F9F9] border-[1px] border-[#4E4D93] text-[16px] 2xl:text-[26px] leading-[150%] text-[#2A254B] font-poppins hover:bg-[#4E4D93] hover:text-white duration-300">View collection</button>
        </section>
    );
}