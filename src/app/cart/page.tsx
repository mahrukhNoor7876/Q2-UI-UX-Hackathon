import Image from "next/image";

export default function Cart(){
    return(
        <div className="w-full h-auto bg-white">
            <section className="w-full h-auto bg-[#F9F9F9] px-2 lg:px-40 py-20">
                <h1 className="text-[26px] text-center lg:text-left lg:text-[36px] 2xl:text-[52px] text-[#2A254B] leading-[140%]">Your shopping cart</h1>
                <div className="hidden w-full h-auto lg:flex pt-5 pb-3 border-[#EBE8F4] border-b-[1px]">
                    <h6 className="text-[14px] font-poppins">Product</h6>
                    <h6 className="text-[14px] font-poppins lg:ml-[25rem] xl:ml-[40rem]">Quantity</h6>
                    <h6 className="text-[14px] font-poppins ml-auto">Total</h6>
                </div>
                <div className="w-full h-auto py-5 flex flex-col gap-5 border-[#EBE8F4] border-b-[1px]">
                    <div className="w-full h-auto flex flex-col lg:flex-row">
                        <div className="w-auto h-auto flex gap-[21px]">
                            <Image 
                                src="/images/Product Image.png"
                                alt=""
                                width={109}
                                height={134}
                            />
                            <div className="w-[200px] h-[134px] flex flex-col justify-center gap-[8px]">
                                <h4 className="font-poppins text-[20px] leading-[140%] text-[#2A254B]">Graystone vase</h4>
                                <p className="font-poppins text-[14px] leading-[150%] text-[#2A254B]">A timeless ceramic vase with 
                                a tri color grey glaze.</p>
                                <p className="font-poppins text-[16px] leading-[150%] text-[#2A254B]">£85</p>
                            </div>
                        </div>
                        <p className="py-5 lg:ml-[10rem] xl:ml-[24rem] font-poppins text-[16px] leading-auto text-[#2A254B] hidden lg:block">1</p>
                        <p className="py-5 ml-auto font-poppins text-[18px] leading-[150%] text-[#2A254B] hidden lg:block">£85</p>
                    </div>

                    <div className="w-full h-auto flex flex-col lg:flex-row">
                        <div className="w-auto h-auto flex gap-[21px]">
                            <Image 
                                src="/images/Product Image (1).png"
                                alt=""
                                width={109}
                                height={134}
                            />
                            <div className="w-[200px] h-[134px] flex flex-col justify-center gap-[8px]">
                                <h4 className="font-poppins text-[20px] leading-[140%] text-[#2A254B]">Basic white vase</h4>
                                <p className="font-poppins text-[14px] leading-[150%] text-[#2A254B]">Beautiful and simple this is
                                one for the classics</p>
                                <p className="font-poppins text-[16px] leading-[150%] text-[#2A254B]">£85</p>
                            </div>
                        </div>
                        <p className="py-5 lg:ml-[10rem] xl:ml-[24rem] font-poppins text-[16px] leading-auto text-[#2A254B] hidden lg:block">1</p>
                        <p className="py-5 ml-auto font-poppins text-[18px] leading-[150%] text-[#2A254B] hidden lg:block">£85</p>
                    </div>
                </div>
                <div className="pt-5 flex flex-col items-end w-full h-auto gap-[12px]">
                    <div className="flex gap-[16px]">
                        <h4 className="text-[20px] font-poppins lg:text-left lg:text-[20px] 2xl:text-[52px] text-[#4E4D93] leading-[140%]">Subtotal</h4>
                        <p className="text-[20px] font-poppins lg:text-left lg:text-[20px] 2xl:text-[52px] text-[#2A254B] leading-[140%]">£170</p>
                    </div>
                    <p className="font-poppins text-[14px] leading-[140%] text-[#4E4D93]">Taxes and shipping are calculated at checkout</p>
                    <button className="px-[32px] py-[16px] text-[16px] leading-[150%] text-[#fff] bg-[#2A254B] stroke-[#4E4D93] stroke-[1px] flex self-end">Go to checkout</button>
                </div>
            </section>
        </div>
    );
}