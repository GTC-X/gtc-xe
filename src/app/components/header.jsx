import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { GoHome } from "react-icons/go";

export default function App() {
    return (
        <div className="bg-gradient-to-r from-[#000F2F] to-[#001C44]">
            <Navbar class=" container" maxWidth="xl" position="static">
                <NavbarBrand>
                    <div className="py-2"><img className=" h-6" src="/logo.png" alt="" /></div>
                </NavbarBrand>
                <NavbarContent className="hidden md:flex gap-4" justify="center">
                    <NavbarItem className=" text-white border-b border-[#65BC7B] py-2">
                        <GoHome className=" text-white text-base" size={18} />
                    </NavbarItem>
                    <NavbarItem className=" text-white py-2">
                        <Link color="white" className="text-white text-base" href="#">
                            About Us
                        </Link>
                    </NavbarItem>
                    <NavbarItem className=" text-white py-2">
                        <Link color="white" className="text-white text-base" href="#">
                            Liquidity
                        </Link>
                    </NavbarItem>
                    <NavbarItem className=" text-white py-2">
                        <Link color="white" className="text-white text-base" href="#">
                            Inclusive Solutions
                        </Link>
                    </NavbarItem>
                    <NavbarItem className=" text-white py-2">
                        <Link color="white" className="text-white text-base" href="#">
                            Technology Solutions
                        </Link>
                    </NavbarItem>

                    <NavbarItem className=" text-white py-2">
                        <Link color="white" className="text-white text-base" href="#">
                            Liquidity  Channels & Hubs
                        </Link>
                    </NavbarItem>
                    <NavbarItem className=" text-white py-2">
                        <Link color="white" className="text-white text-base" href="#">
                            White Label
                        </Link>
                    </NavbarItem>
                </NavbarContent>
                <NavbarContent justify="end">
                    <NavbarItem>

                    </NavbarItem>
                    <Popover placement="bottom">
                        <PopoverTrigger>
                            <Button className="text-white" as={Link} color="" href="#" variant="flat">
                                EN
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent>
                            <div className="px-1 py-2 min-w-20">
                                <div className="text-small mb-2 font-bold">EN</div>
                                <div className="text-small font-bold">AR</div>
                            </div>
                        </PopoverContent>
                    </Popover>
                </NavbarContent>
            </Navbar>
        </div>
    );
}
