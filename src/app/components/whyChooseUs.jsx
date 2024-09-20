'use client'
// import { useState } from "react"

const Card = ({ icon, title, para }) => {
    return (
        <div className="border border-[#0000000D] rounded-md bg-gray-100 p-3 py-8"
            style={{ boxShadow: "10px 6px 7.5px 0px #0000001C" }}>
            <img className="mx-auto h-14" src={icon} alt="" />
            <h2 className="text-sm mt-2 font-bold">{title}</h2>
            <p className="mt-3 text-xs">{para}</p>
        </div>
    )
}
const WhyChooseUs = () => {
    // const [showForm, setShowForm] = useState(false)
    return (
        <div className="relative">
            <div className="py-10 md:py-16 2xl:pt-20 flex gap-2 flex-col md:flex-row justify-between items-center pb-36">
                <div className="max-w-4xl px-4 mx-auto col-span-2 text-center">
                    <h2 className="text-2xl">Why Choose Us?</h2>
                    <p className="text-xs mt-2">
                        At Premier Liquidity Services, we combine expertise, technology, and innovation to deliver unparalleled liquidity and trading<br />
                        solutions. Our commitment to excellence ensures that you have the tools and support needed to thrive in the financial markets.
                    </p>
                    <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-3">
                        <Card icon="/c-solution.svg" title="Customizable Solutions" para="Tailor our services to fit your unique businessrequirements." />
                        <Card icon="/a-technology.svg" title="Advanced Technology" para="Leverage our state-of-the-art technologyfor superior" />
                        <Card icon="/e-support.svg" title="Expert Support" para="Our team of seasoned professionals is always ready to assist you." />
                        {/* <img className=" absolute right-0" src="/form.svg" alt="" /> */}
                    </div>
                </div>
                {/* {showForm && */}
                  {/* <div className=" ease-in-out duration-1000 relative md:min-w-[570px] md:min-h-[570px]">
                        <img className="md:block hidden absolute top-0 right-0" src="/form-bg.png" alt="" />
                        <div className="form-why-choose md:absolute relative md:w-[70%] w-full bg-success  md:bg-transparent md:left-[30%] px-6 py-10  text-white text-center">
                            <h2 className=" text-2xl font-medium">Contact Us</h2>
                            <p className="font-medium mt-1">Registration Form</p>
                            <form className=" mt-8">
                                <input className="mb-2 border placeholder:text-white border-white w-full py-2 px-2 bg-transparent outline-none focus:outline-none !rounded-none"
                                    placeholder="Your Name" />
                                <input className="mb-2 border placeholder:text-white border-white w-full py-2 px-2 bg-transparent outline-none focus:outline-none !rounded-none"
                                    placeholder="You Mobile"
                                />  <input className="mb-2 border placeholder:text-white border-white w-full py-2 px-2 bg-transparent outline-none focus:outline-none !rounded-none"
                                    placeholder="Your Email"
                                />  <input className="mb-2 border placeholder:text-white border-white w-full py-2 px-2 bg-transparent outline-none focus:outline-none !rounded-none"
                                    placeholder="Confirm Email"
                                />  <textarea className="mb-2 resize-none border placeholder:text-white border-white w-full py-2 px-2 bg-transparent outline-none focus:outline-none !rounded-none"
                                    placeholder="Note"
                                    rows={4}
                                />
                                <button className="mt-4 text-white bg-success py-2 px-6 rounded-[25px] text-xs font-bold"
                                    style={{ boxShadow: "5px 5px 11.7px 0px #00000042" }}
                                >
                                    Learn More
                                </button>
                            </form>
                        </div>
                    </div> /*}
                {/* } */}
                {/* {!showForm &&
                    <div>
                        <img className=" absolute top-28 right-0" src="/form.svg" alt=""
                            onClick={() => { setShowForm(true) }}
                        />
                    </div>
                } */}
            </div>
        </div>
    )
}
export default WhyChooseUs