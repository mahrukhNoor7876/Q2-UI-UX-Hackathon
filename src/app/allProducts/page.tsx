import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { allproduct } from "@/app/allProducts/data/allproducts";
import Image from "next/image";

export default function AllProducts(){
    return(
        <div>
            {/* HeroSection */}
            <section className="w-full h-[209px]" style={{backgroundImage: "url('/images/Frame 143.png')"}}>
                <h1 className="text-white text-[36px] font-poppins leading-[140%] px-5 sm:px-[80px] py-[123px]">All Products</h1>
            </section>
            {/* DropDown */}
            <section className="hidden w-full h-[64px] sm:flex">
                <div className="w-[557px] h-[48px] p-5">
                    <ul className="flex gap-5 font-poppins">
                        <li className="flex gap-2 text-[16px] leading-[150%]">
                            Category
                            <FontAwesomeIcon icon={faAngleDown} className="text-[12px] pt-[5px]" />
                        </li>
                        <li className="flex gap-2 text-[16px] leading-[150%]">
                            Product Type
                            <FontAwesomeIcon icon={faAngleDown} className="text-[12px] pt-[5px]" />
                        </li>
                        <li className="flex gap-2 text-[16px] leading-[150%]">
                            Price
                            <FontAwesomeIcon icon={faAngleDown} className="text-[12px] pt-[5px]" />
                        </li>
                        <li className="flex gap-2 text-[16px] leading-[150%]">
                            Brand
                            <FontAwesomeIcon icon={faAngleDown} className="text-[12px] pt-[5px]" />
                        </li>
                    </ul>
                </div>
                <div className="w-[237px] h-[48px] flex gap-4 py-5 ml-auto">
                    <ul className="flex gap-5 font-poppins">
                        <li className="text-[16px] leading-[150%]">
                            Sorting by:
                        </li>
                        <li className="flex gap-2 text-[16px] leading-[150%]">
                            Date added
                            <FontAwesomeIcon icon={faAngleDown} className="text-[12px] pt-[5px]" />
                        </li>
                    </ul>
                </div>
            </section>
            {/* Mobile DropDown Section */}
            <section className="sm:hidden w-full h-[64px] flex gap-3 items-center justify-center">
                <button className="w-[143px] h-[46px] flex gap-2 items-center justify-center bg-[#F9F9F9] font-poppins">Filters
                    <FontAwesomeIcon icon={faAngleDown} className="text-[12px]" />
                </button>
                <button className="w-[143px] h-[46px] flex gap-2 items-center justify-center bg-[#F9F9F9] font-poppins">Sorting
                    <FontAwesomeIcon icon={faAngleDown} className="text-[12px]" />
                </button>
            </section>
            {/* Main Section */}
            <section className="flex flex-col justify-center items-center">
                <section className="px-[34px] flex justify-center flex-wrap gap-5 w-full h-auto mb-">
                    {allproduct.map(product => {
                        return(
                            <div className="w-[305px] h-[455px] flex flex-col gap-[24px] cursor-pointer border-black hover:border-[1px] duration-300" key={product.id}>                    
                                <Image 
                                    src={product.src}
                                    alt=""
                                    width={305}
                                    height={375}
                                />
                                <div className="flex flex-col gap-[8px] w-[154px] h-[63px]">
                                    <p className="text-[20px] leading-[140%] font-poppins text-[#2A254B]">{product.title}</p>
                                    <p className="text-[18px] leading-[150%] font-poppins text-[#2A254B]">{product.price}</p>
                                </div>
                            </div>
                        );
                    })}
                </section>
                <button className="my-12 w-[170px] h-[56px] px-[32] py-[16] bg-[#F9F9F9] border-[1px] border-[#4E4D93] text-[16px] hover:bg-[#4E4D93] hover:text-white duration-300 leading-[150%] text-[#2A254B] font-poppins">View collection</button>
            </section>
        </div>
    );
}