import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { PiMailbox } from "react-icons/pi";
import { Divider } from "@nextui-org/react";


const Banner = () => {
    return (
        <>
            <div class=" relative banner-img -mt-[152px] pb-12" >
                <img className=" absolute right-0" src="/banner.svg" alt=""/>
                <div className="container pt-[14rem] ">
                    <div className="px-6">
                        <h2 className=" text-4xl font-bold text-white">PREMIER<br /> LIQUIDITY PROVIDER</h2>
                        <p className="text-xs mt-4 text-white">
                            Deep Pool Of Liquidity <br />
                            Competitive Spreads</p>
                        <button className="mt-3 shadow-large text-white bg-success py-2 px-6 rounded-[25px] text-xs font-bold">
                            Learn More
                        </button>
                    </div>
                </div>
                <div>
                    <img className="w-full -mb-9" src="/footer-waves.png" alt="" />
                </div>
            </div>
        </>
    )
}

export default Banner