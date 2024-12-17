
export default function Benefits(){
    return(
        <section className="w-auto sm:w-full h-auto sm:h-[481px] bg-[#F9F9F9] p-[10px] sm:py-[52px] sm:px-[93px]">
            <div className="w-auto sm:w-full h-[364px] bg-white flex flex-col px-5 sm:px-0 justify-center items-center gap-20">
                <div className="w-auto sm:w-[571px] 2xl:w-auto h-[114px] flex flex-col items-center justify-center gap-[16px]">
                    <h1 className="text-[20px] sm:text-[36px] 2xl:text-[52px] leading-[140%] font-poppins">Join the club and get the benefits</h1>
                    <div className="w-auto sm:w-[470px] 2xl:w-[700px] h-[48px]">
                        <p className="text-center font-poppins text-[12px] sm:text-[16px] 2xl:text-[26px] leading-[150%]">Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                    </div>
                </div>
                <div className="w-full sm:w-[472px] 2xl:w-[600px] 2xl:h-[80px] h-[45px] sm:h-[56px] flex">
                    <div className="w-full sm:w-[354px] 2xl:w-[600px] h-[45px] 2xl:h-[80px] sm:h-[56px] bg-[#F9F9F9]">
                        <input type="text" placeholder="your@email.com" className="w-full sm:w-[354px] 2xl:w-full 2xl:h-[80px] h-[45px] sm:h-[56px] text-[#2A254B] text-[12px] sm:text-[16px] 2xl:text-[20px] leading-[auto] font-poppins text-center bg-transparent p-2" />
                    </div>
                    <button className="w-[50%] sm:w-[118px] 2xl:w-[200px] h-[45px] 2xl:h-[80px] sm:h-[56px] bg-[#2A254B] border-[1px] border-[#4E4D93] flex items-center justify-center hover:bg-[#4E4D93] duration-300 font-poppins text-center leading-[150%] text-[12px] 2xl:text-[20px] sm:text-[16px] text-white">Sign up</button>
                </div>
            </div>
        </section>
    );
}