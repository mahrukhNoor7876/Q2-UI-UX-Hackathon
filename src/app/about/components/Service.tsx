import Image from "next/image";
import Link from "next/link";

export default function Service(){
    return(
        <section className="w-auto xl:w-[1340px] 2xl:w-auto 2xl:px-20 h-[660px] xl:h-[603px] sm:h-[370px] flex flex-col sm:flex-row bg-white">
            <div className="hidden xl:block w-[720px] h-[603px]">
                <Image 
                    src="/images/Image (1).png"
                    alt=""
                    width={720}
                    height={603}
                />
            </div>
            <div className="xl:hidden w-auto h-[603px] -mr-2">
                <Image 
                    src="/images/Image (1).png"
                    alt=""
                    width={720}
                    height={603}
                />
            </div>
            <div className="w-auto xl:w-[670px] h-[603px] xl:py-[50px] px-5 lg:px-[60px] 2xl:px-[80px] 2xl:py-20">
                <div className="w-auto xl:w-[536px] h-[225px] flex flex-col gap-[25px]">
                    <h1 className="text-[18px] lg:text-[24px] 2xl:text-[32px] font-poppins leading-[140%] text-[#2A254B]">Our service isn’t just personal, it’s actually
                    hyper personally exquisite</h1>
                    <div className="w-auto xl:w-[536px] 2xl:w-[700px] h-[132px] flex flex-col gap-[20px]">
                        <p className="text-[12px] lg:text-[16px] 2xl:text-[20px] leading-[auto] text-[#505977] font-poppins">When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</p>
                        <p className="text-[12px] lg:text-[16px] 2xl:text-[20px] leading-[auto] text-[#505977] font-poppins">Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</p>
                    </div>
                </div>
                <Link href="/contact">
                    <button className="lg:mt-5 xl:mt-[25%] w-[150px] h-[56px] px-[32] py-[16] bg-[#F9F9F9] border-[1px] border-[#4E4D93] hover:bg-[#4E4D93] hover:text-white duration-300 text-[16px] leading-[150%] text-[#2A254B] font-poppins">Get in touch</button>
                </Link>
            </div>
        </section>
    );
}
