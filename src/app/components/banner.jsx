import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { PiMailbox } from "react-icons/pi";
import { Divider } from "@nextui-org/react";


const Banner = ({ title, desc }) => {
    return (
        <>
            <div class=" relative banner-img pb-12" >
                <img className=" absolute right-0" src="/banner.svg" alt="" />
                <div className="container pt-32 pb-44 ">
                    <div className="px-6">
                        <h2 className=" text-4xl font-bold 6text-white"
                            dangerouslySetInnerHTML={{ __html: title }}
                        />
                        <div className="text-xs mt-4 text-white"
                            dangerouslySetInnerHTML={{ __html: desc }}
                        />
                        <button className="mt-3 shadow-large text-white bg-success py-2 px-6 rounded-[25px] text-xs font-bold">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner