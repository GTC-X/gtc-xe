import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Popover, PopoverTrigger, PopoverContent } from "@nextui-org/react";
import { GoHome } from "react-icons/go";

export default function App() {

    const navItems = [
        { name: "", icon: <GoHome size={18} />, href: "#", active: true },
        { name: "About Us", href: "#" },
        { name: "Liquidity", href: "#" },
        { name: "Inclusive Solutions", href: "#" },
        { name: "Technology Solutions", href: "#" },
        { name: "Liquidity Channels & Hubs", href: "#" },
        { name: "White Label", href: "#" },
    ];

    return (
        <div className="bg-gradient-to-r from-[#000F2F] to-[#001C44]">
            <Navbar class="container" maxWidth="xl" position="static">
                <NavbarBrand>
                    <div className="py-2"><img className="h-5 md:h-10" src="/logo.png" alt="" /></div>
                </NavbarBrand>
                <NavbarContent className="hidden md:flex gap-4 justify-between" justify="center">
                    {navItems.map((item, index) => (
                        <NavbarItem
                            key={index}
                            className={`text-white py-2 px-2 ${item.active ? "border-b-2 border-[#65BC7B]" : ""}`}
                        >
                            {item.icon ? (
                                <div className="flex items-center gap-1">
                                    {item.icon}
                                    <span className="text-base">{item.name}</span>
                                </div>
                            ) : (
                                <Link href={item.href} className="text-white text-base hover:text-primary">
                                    {item.name}
                                </Link>
                            )}
                        </NavbarItem>
                    ))}
                </NavbarContent>
             
            </Navbar>
        </div>
    );
}
