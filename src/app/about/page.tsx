import About from "@/app/components/About";
import Service from "@/app/about/components/Service";
import Brand from "@/app/components/Brand";
import Benefits from "@/app/about/components/Benefits";

export default function AboutPage(){
    return(
        <div>
            <section className="w-full h-[246px] bg-white flex items-center justify-center">
                <h1 className="w-[704px] h-[100px] text-[24px] sm:text-[36px] leading-[140%] text-[#2A254B] font-poppins text-center">A brand built on the love of craftmanship,
                quality and outstanding customer service</h1>
            </section>
            <About />
            <Service />
            <Brand />
            <Benefits />
        </div>
    );
}