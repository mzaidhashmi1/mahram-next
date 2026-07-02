"use client"
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";
import { Card } from "./ui/card"
import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const faqs = {
  "questions": [
    {
      q: "Is Mahram free to use?",
      a: "Every new guardian starts with 100 free credits upon joining. Additional credits can be purchased securely through JazzCash. Both guardians spend 10 credits each when an unlock request is accepted — ensuring only serious families engage.",
    },
    {
      q: "How are profits verfied?",
      a: "Every guardian and prospect goes through CNIC verification before their account or profile goes live. Unverified profiles are never shown on the platform.",
    },
    {
      q: "What happens if my prosect is rejected during verfication?",
      a: "You can resubmit your prospect's profile for verification at any time. There's no permanent rejection — just make sure all details and documents are accurate.",
    },
    {
      q: "How does unlock system work?",
      a: "Prospects are visible with limited information by default. You send an unlock request to a guardian — they choose to accept or reject. If accepted, both families spend 10 credits and full profiles are revealed to each other.",
    },
    {
      q: "Is my personal data safe?",
      a: "All personal data on Mahram is fully encrypted. Contact information is never shared — all communication happens through Mahram's secure in-app chat only.",
    },
    {
      q: "Can i reject an unlock request?",
      a: "Absolutely. You have full control. Every unlock request comes to you first — you decide who gets to see your child's full profile. No credits are deducted on rejection.",
    },
  ]
};

export function FAQ(){

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggle = (i: number) => {
      setOpenIndex(openIndex === i ? null : i);
    };

    return(
        <>
        <div className="max-w-6xl mx-auto pt-16 md:pt-40 pb-12 md:pb-20 px-5 md:px-20">
        <div >
            <h1 className="text-3xl md:text-6xl font-extrabold pb-3 md:pb-5 text-center">Frequently Asked Questions</h1>
            <p className="text-muted-foreground text-sm md:text-xl text-center pb-10 md:pb-20">Everything you need to know about how Mahram works.</p>
        </div>
        <div className="flex-1 min-w-0">

          <div className="flex flex-col gap-2 sm:gap-2.5">
            {faqs["questions"].map((item, i) => (
              <div
                key={i}
                className={`${openIndex === i ? "bg-[#FDF8F7]" : "bg-white"} rounded-2xl md:rounded-4xl overflow-hidden shadow-[0_0_8px_rgba(0,0,0,0.12)] w-full max-w-[1000px]`}
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex justify-between items-center gap-3 px-4 sm:px-6 py-4 md:py-7 text-left group"
                >
                  <span
                    className={`text-sm md:text-xl font-semibold group-hover:text-[#941B0C] ${
                      openIndex === i ? "text-[#941B0C]" : "text-black"
                    }`}
                  >
                    {item.q}
                  </span>

                  <span className="text-xl sm:text-2xl shrink-0">
                    {openIndex === i ? <ChevronUp size={16} className="text-white bg-[#941B0C] rounded-full p-2 w-7 h-7 md:w-9 md:h-9" /> : <ChevronDown size={16} className="text-[#941B0C] bg-[#FDE8E5] rounded-full p-2 w-7 h-7 md:w-9 md:h-9" />}
                  </span>
                </button>

                <div
                  className={`px-4 sm:px-6 text-xs md:text-lg text-[#7A6A68] leading-relaxed border-t border-slate-100 overflow-hidden transition-all duration-300 ${
                    openIndex === i
                      ? "max-h-40 py-3 opacity-100"
                      : "max-h-0 py-0 opacity-0"
                  }`}
                >
                  {item.a}
                </div>
              </div>
            ))}
          </div>

        </div>
        </div>


        <div className="hidden md:flex flex-col items-center justify-center pb-20">
            <Card className="w-[990px] h-[375px] bg-[#FDF8F7] flex flex-col items-center justify-center rounded-3xl border-[#F5EDED] gap-4 shadow-sm group hover:bg-[#F8EEEC]">
        <div className="w-[70px] h-[70px] rounded-3xl bg-gradient-to-l from-[#9F250D] via-[#A52B0D] to-[#621108] flex items-center justify-center group-hover:rotate-6">
            <MessageCircle className="text-white h-9 w-9" />
        </div>
        <div className="text-center">
            <h1 className="font-extrabold text-md text-3xl pb-5">Still have questions?</h1>
            <p className="text-muted-foreground text-lg pb-5">Our team is available 24/7 to help you with your journey. Feel free to <br></br> contact us and we'll get back to you immediately.</p>
        </div>
        <div>
            <Button variant="card" className="bg-black text-white font-bold text-lg">Contact Support</Button>
            <Button className="ml-8 w-[175px] border-gray-300 bg-white hover:bg-white text-black font-bold text-lg py-6 rounded-2xl">Help Center</Button>
        </div>
    </Card>
        </div>

        <div className="flex md:hidden flex-col items-center justify-center pb-12 px-5">
            <Card className="w-full max-w-[440px] py-8 bg-[#FDF8F7] flex flex-col items-center justify-center rounded-3xl border-[#F5EDED] gap-4 shadow-sm">
                <div className="w-[50px] h-[50px] rounded-2xl bg-gradient-to-l from-[#9F250D] via-[#A52B0D] to-[#621108] flex items-center justify-center">
                    <MessageCircle className="text-white h-6 w-6" />
                </div>
                <div className="text-center px-6">
                    <h1 className="font-extrabold text-xl pb-3">Still have questions?</h1>
                    <p className="text-muted-foreground text-xs pb-4">Our team is available 24/7 to help you with your journey. Feel free to contact us and we'll get back to you immediately.</p>
                </div>
                <div className="flex flex-col items-center gap-3 w-full px-6">
                    <Button variant="card" className="bg-black text-white font-bold text-sm w-full">Contact Support</Button>
                    <Button className="w-full border-gray-300 bg-white hover:bg-white text-black font-bold text-sm py-5 rounded-2xl">Help Center</Button>
                </div>
            </Card>
        </div>
        </>
    )
}