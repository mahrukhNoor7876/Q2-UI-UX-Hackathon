import Image from "next/image";

export default function HeroSection(){
    return(
        <section className="w-full h-auto xl:h-[704px]  bg-white xl:px-[80px] xl:py-[60px]">
            <div className="flex xl:w-full h-[502px] lg:h-[584px] 2xl:h-[900px] bg-[#2A254B]">
                <div className="px-[20px] sm:px-[40px] py-[40px] lg:p-[40px] 2xl:p-24">
                    <h1 className="text-[32px] 2xl:text-[72px] font-poppins text-white leading-[140%]">The furniture brand for the future, with timeless designs</h1>
                    <button className="hidden lg:block w-[180px] 2xl:w-[300px] h-[56px] 2xl:h-[100px] px-[32px] py-[16px] bg-[#F9F9F9] bg-opacity-[15%] border-[1px] border-[#4E4D93] leading-[150%] text-[16px] 2xl:text-[30px] font-poppins text-white mt-[50px] hover:bg-[#4E4D93] duration-300">View collection</button>
                    <div className="lg:w-[602px] 2xl:w-[950px] h-[81px] ">
                        <p className="text-white text-[16px] sm:text-[18px] lg:text-[18px] 2xl:text-[32px] font-poppins mt-[100px] lg:mt-[220px] leading-[150%]">
                           A new era in eco friendly furniture with Avelon, the French luxury retail brand
                           with nice fonts, tasteful colors and a beautiful way to display things digitally 
                           using modern web technologies.</p>
                    </div>
                    <button className="lg:hidden mt-[70px] w-full sm:w-[30%] h-[56px] px-[32px] py-[16px] bg-[#F9F9F9] bg-opacity-[15%] border-[1px] border-[#4E4D93] leading-[150%] text-[16px] font-poppins text-white hover:bg-[#4E4D93] duration-300">View collection</button>
                </div>
                <Image 
                    src="/images/Right Image.png"
                    alt="right image"
                    width={520}
                    height={584}
                    className="ml-auto hidden xl:block 2xl:hidden"
                />
                <Image 
                    src="/images/Right Image.png"
                    alt="right image"
                    width={340}
                    height={584}
                    className="ml-auto hidden lg:block xl:hidden"
                />
                <Image 
                    src="/images/Right Image.png"
                    alt="right image"
                    width={900}
                    height={900}
                    className="ml-auto hidden 2xl:block"
                />
            </div>
        </section>
    );
}