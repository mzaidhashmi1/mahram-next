"use client"
import { ArrowUp } from "lucide-react";

export function Footer(){
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return(
        <>
        <div className="hidden md:flex flex-row items-center justify-between px-40 py-10">
        <div className="font-semibold text-muted-foreground">
            <h1>The most trusted platform for finding  <br/> serious rishtas and lifelong partners.</h1>
        </div>
        <div className="flex flex-col items-end gap-3">
            <div className="flex flex-row gap-6 font-semibold text-muted-foreground">
                <a href="/privacy-policy" className="hover:text-[#941B0C]">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-[#941B0C]">Terms of Service</a>
                <a href="/contact-us" className="hover:text-[#941B0C]">Contact Us</a>
            </div>
            <p className="text-muted-foreground">
                © 2026 Mahram Rishta. All Rights Reserved.
            </p>
        </div>
        <div>
            <button
            onClick={scrollToTop}
            className="w-14 h-14 rounded-full hover:bg-[#FBE4E1] border-2 border-dashed hover:border-[#941B0C] flex items-center justify-center cursor-pointer"
        >
            <ArrowUp className="text-gray-500 hover:text-[#941B0C]" size={22} />
        </button>
        </div>
        </div>

        <div className="flex md:hidden flex-col items-center justify-center px-6 py-10 gap-6 text-center">
            <div className="font-semibold text-muted-foreground text-sm">
                <h1>The most trusted platform for finding serious rishtas and lifelong partners.</h1>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4 font-semibold text-muted-foreground text-sm">
                <a href="/privacy-policy" className="hover:text-[#941B0C]">Privacy Policy</a>
                <a href="/terms-of-service" className="hover:text-[#941B0C]">Terms of Service</a>
                <a href="/contact-us" className="hover:text-[#941B0C]">Contact Us</a>
            </div>
            <p className="text-muted-foreground text-sm">
                © 2026 Mahram Rishta. All Rights Reserved.
            </p>
        </div>
        </>
    )
}