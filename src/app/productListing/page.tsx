import Image from "next/image";
import Link from "next/link";
import { ceramic } from "@/app/data/ceramic";
import Brand from "@/app/components/Brand";
import Benefits from "@/app/components/Benefits";

export default function Product(){
    return(
        <section className="h-auto w-full bg-white">
            {/* section1 */}
            <section className="w-full h-auto lg:h-[600px] bg-white">
                <div className="flex flex-col lg:flex-row w-full h-full">
                    <Image 
                        src="/images/Parent (1).png"
                        alt=""
                        width={700}
                        height={600}
                    />
                    <div className="w-full lg:w-1/2 h-auto lg:h-[600px] bg-white p-5 lg:p-10">
                        <div className="w-full h-full m-5">
                            <h1 className="font-poppins text-[20px] lg:text-[36px] text-[#2A254B]">The Dandy Chair</h1>
                            <p className="font-poppins text-[18px] lg:text-[24px] text-[#12131A]">£250</p>
                            <div className="p-3 lg:p-5">
                                <h3 className="text-[12px] lg:text-[16px] font-poppins text-[#2A254B]">Description</h3>
                                <p className="font-poppins text-[12px] lg:text-[16px] text-[#505977]">A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                                <ul className="flex flex-col font-poppins text-[12px] lg:text-[16px] text-[#505977] mt-[20px] gap-1 list-disc list-inside">
                                    <li>
                                        Premium material
                                    </li>
                                    <li>
                                        Handmade upholstery
                                    </li>
                                    <li>
                                        Quality timeless classic
                                    </li>
                                </ul>
                            </div>
                            <h3 className="font-poppins text-[16px] text-[#2A254B]">Dimensions</h3>
                            <div className="w-[241px] h-[51px] grid grid-cols-3 mt-[10px]">
                                <div className="w-[44px] h-[51px]">
                                    <p className="font-poppins text-[14px] text-[#2A254B]">Height</p>
                                    <p className="font-poppins text-[14px] text-[#505977] mt-[10px]">110cm</p>
                                </div>
                                <div className="w-[44px] h-[51px]">
                                    <p className="font-poppins text-[14px] text-[#2A254B]">Width</p>
                                    <p className="font-poppins text-[14px] text-[#505977] mt-[10px]">75cm</p>
                                </div>
                                <div className="w-[44px] h-[51px]">
                                    <p className="font-poppins text-[14px] text-[#2A254B]">Depth</p>
                                    <p className="font-poppins text-[14px] text-[#505977] mt-[10px]">50cm</p>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row w-full h-[115px] mt-5 gap-5 lg:gap-[15rem]">
                                <div className="flex gap-[10px] mt-5">
                                    <label htmlFor="">Amount</label>
                                    <input type="number" placeholder="1" min={1} className="w-[100px] h-[30px] text-center" />
                                </div>
                                <button className="w-full lg:w-[143px] h-[56px] lg:px-[32px] py-[16px] font-poppins text-[16px] text-white bg-[#2A254B] stroke-[#4E4D93] hover:bg-[#4E4D93]">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* section2 */}
            <section className="flex flex-col w-full h-auto py-[20px] lg:px-[40px] 2xl:px-[80px] bg-white">
                <h1 className="text-[25px] text-center lg:text-left lg:text-[32px] 2xl:text-[52px] text-[#2A254B] leading-[auto]">You might also like</h1>
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
            {/* section3 */}
            <Brand />
            {/* section4 */}
            <Benefits />
        </section>
    );
}