import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { PiMailbox } from "react-icons/pi";
import { Divider } from "@nextui-org/react";
import Image from "next/image";


const Footer = () => {
    return (
        <>
            <div className="bg-[#bbb4b424] -mb-[185px] md:mb-0">
                <div className="relative w-full h-64 md:h-[550px] z-50">
                    <Image src="/footer.svg" fill alt="bg" className=" object-cover" />
                </div>
               
            </div>
            <div class=" footer-img md:-mt-[152px] mt-0 pb-12" >
                <div className="container">
                    <div className=" grid md:pt-[152px] pt-[230px] md:grid-cols-4 sm:grid-cols-2 grid-cols-1 py-6 gap-4 px-6">
                        <div className="md:col-span-2">
                            <img className=" h-6" src="/logo.png" alt="" />
                            <img className=" mt-6 h-52 md:w-5/6" src="/map.svg" alt="" />
                        </div>
                        <div>
                            <p className=" text-2xl text-white">Our Services</p>
                            <div className="mt-6 flex flex-col gap-2">
                                <p className="text-base text-white">Forex</p>
                                <p className="text-base text-white">Metals</p>
                                <p className="text-base text-white">Indices</p>
                                <p className="text-base text-white">Energy</p>
                                <p className="text-base text-white">Crypto - CFDs</p>
                                <p className="text-base text-white">Equities</p>
                                <p className="text-base text-white">EFTs</p>
                                <p className="text-base text-white">NDFs CFDs</p>
                            </div>
                        </div>
                        <div>
                            <p className=" text-2xl text-white">News Letter</p>
                            <div className="mt-6 flex flex-col gap-2">
                                <textarea
                                    variant="bordered"
                                    rows={2}
                                    labelPlacement="outside"
                                    placeholder="Email Here.."
                                    className="max-w-xs p-3 rounded-none bg-transparent border resize-none border-white outline-none focus-within:border-inherit"
                                />
                                <div className=" text-end">
                                    <button className="bg-[#65BC7B] text-white font-semibold px-5 py-1.5 rounded-[25px]">
                                        Submit
                                    </button>
                                </div>
                                <div className=" flex gap-3 items-center">
                                    <div>
                                        <img className="w-5 h-5" src="/phone-call.png" alt="" />
                                    </div>
                                    <p className="font-semibold text-white">+971 50 000 0000</p>
                                </div>
                                <div className=" flex gap-3 items-center">
                                    <div>
                                        <img className="w-5 h-5" src="/email.png" alt="" />
                                    </div>
                                    <p className="font-semibold text-white">xxx@gtcfx.com</p>
                                </div>
                                <div className=" flex gap-3 items-center">
                                    <div>
                                        <img className="w-5 h-5" src="/mailbox.png" alt="" />
                                    </div>
                                    <p className="font-semibold text-white">57545665</p>
                                </div>
                                <div className=" flex gap-3 items-center">
                                    <div>
                                        <img className="w-5 h-5" src="/clock.png" alt="" />
                                    </div>
                                    <p className="font-semibold text-white">24/7</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className=" text-xs font-bold text-white">London, Shanghai, Beijing, Hong Kong, Tokyo, New York, Kuala Lumpur, Singapore, Dubai, Sao Paulo</p>
                        <Divider className="my-4 bg-white" />
                        <div className=" flex justify-between">
                            <p className="text-xs text-white">© 2024 Premier Liquidity Services. All rights reserved.</p>
                            <div className=" flex gap-2">
                                <div>
                                    <img className="h-5 w-5" src='/linkdin.png' alt="" />
                                </div>
                                <div>
                                    <img className="h-5 w-5" src='/linkdin.png' alt="" />
                                </div>
                                <div>
                                    <img className="h-5 w-5" src='/linkdin.png' alt="" />
                                </div>
                                <div>
                                    <img className="h-5 w-5" src='/linkdin.png' alt="" />
                                </div>
                            </div>
                        </div>
                        <p className=" font-bold text-[17px] mt-6 text-white">Announcement: GTC Group's Landmark Project</p>
                        <p className=" text-xs mt-4 text-white">We are delighted to announce a monumental achievement for GTC Group. We have secured a significant contract to construct a new building that will proudly bear the GTC Group name. This landmark project not only symbolizes our continued growth and success but also underscores the strength of our partnerships and our unwavering commitment to excellence.<br />
                            At GTC Group, we've established ourselves as a global leader in the financial derivatives industry. Our pride lies in our extensive experience and unwavering commitment to delivering top-tier financial services. Since 2012, we have maintained
                            a robust presence in the UAE. Our exceptional range of services and products serves as a testament to our financial stability and our dedication to providing unparalleled services to our rapidly growing customer base, which now encompasses over 895,000 clients worldwide.<br />
                            GTC Group operates under a rigorous regulatory framework, ensuring compliance with legal requirements and ethical standards. We prioritize regulatory adherence to maintain trust and credibility. This new building will stand as a testament to our dedication to innovation, quality, and the strong relationships we have built with our partners. It reflects the confidence and trust that our stakeholders have placed in us, and we are honored to take on this exciting challenge.
                            Stay tuned for more updates on this exciting project. We look forward to sharing the progress and milestones with you as we move forward.
                            Thank you for being part of the GTC Group journey.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container pt-8 md:pb-12 pb-8">
                <p className="text-[18px] font-semibold text-[#011030]">Globally Trusted & Multi-Regulated Broker</p>
                <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-4 mt-3">
                    <div>
                        <img className="h-20" src="/footer-country/lic1.svg" alt="" />
                    </div>
                    <div>
                        <img className="h-20" src="/fca.png" alt="" />
                    </div>
                    <div>
                        <img className="h-20" src="/asic.png" alt="" />
                    </div>
                    <div>
                        <img className="h-20" src="/fcsm.png" alt="" />
                    </div>
                    <div>
                        <img className="h-20" src="/vfsc.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer