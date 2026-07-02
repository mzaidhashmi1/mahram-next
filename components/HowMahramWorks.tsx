import { UserRoundPlus } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { SquarePlus } from "lucide-react"
import { SearchAlert } from "lucide-react"
import { MessageSquareMore } from "lucide-react"

export function HowMahramWorks(){

    const steps = [
        {
            icon: <UserRoundPlus className="text-[#941B0C] w-[24px] h-[24px]" />,
            title: "Guardian Sign Up",
            text: "Verified guardians only. Sign up and confirm your identity with your CNIC."
        },
        {
            icon: <SquarePlus className="text-[#941B0C] w-[24px] h-[24px]" />,
            title: "Add Your Prospect",
            text: "Add your child's profile. CNIC verified and approved before going live."
        },
        {
            icon: <SearchAlert className="text-[#941B0C] w-[24px] h-[24px]" />,
            title: "Browse & Unlock",
            text: "Browse with limited visibility. Send an unlock request — the other family decides."
        },
        {
            icon: <MessageSquareMore className="text-[#941B0C] w-[24px] h-[24px]" />,
            title: "Connect with Confidence",
            text: "Profiles fully revealed. Connect over secure in-app chat and move forward."
        },
    ]

    return(
        <div className="py-14 md:py-30 ">
        <h2 className="text-center text-3xl md:text-6xl font-extrabold">How Mahram Works</h2>

        <div className="hidden md:flex flex-row gap-5 pt-20 justify-center px-20 pb-20">
            <div className="flex flex-col items-center text-center">
                <div className="w-[80px] h-[80px] rounded-full bg-[#FDECEA] flex items-center justify-center mb-5">
                    <UserRoundPlus className="text-[#941B0C] w-[30px] h-[30px]" ></UserRoundPlus>
                </div>
                <h2 className="font-extrabold text-lg">Guardian Sign Up</h2>
                <p className="text-muted-foreground text-sm">Verified guardians only. Sign <br /> up and confirm your identity <br /> with your CNIC.</p>
            </div>
            <ArrowRight className="mt-7 text-[#E8D5D3]"></ArrowRight>
            <div className="flex flex-col items-center text-center">
                <div className="w-[80px] h-[80px] rounded-full bg-[#FDECEA] flex items-center justify-center mb-5">
                    <SquarePlus className="text-[#941B0C] w-[30px] h-[30px]" ></SquarePlus>
                </div>
                <h2 className="font-extrabold text-lg">Add Your Prospect</h2>
                <p className="text-muted-foreground text-sm">Add your child's profile. CNIC<br />verified and approved before<br />going live.</p>
            </div>
            <ArrowRight className="mt-7 text-[#E8D5D3]"></ArrowRight>
            <div className="flex flex-col items-center text-center">
                <div className="w-[80px] h-[80px] rounded-full bg-[#FDECEA] flex items-center justify-center mb-5">
                    <SearchAlert className="text-[#941B0C] w-[30px] h-[30px]" ></SearchAlert>
                </div>
                <h2 className="font-extrabold text-lg">Browse & Unlock</h2>
                <p className="text-muted-foreground text-sm">Browse with limited visibility.<br />Send an unlock request —<br />the other family decides.</p>
            </div>
            <ArrowRight className="mt-7 text-[#E8D5D3]"></ArrowRight>
            <div className="flex flex-col items-center text-center">
                <div className="w-[80px] h-[80px] rounded-full bg-[#FDECEA] flex items-center justify-center mb-5">
                    <MessageSquareMore className="text-[#941B0C] w-[30px] h-[30px]" ></MessageSquareMore>
                </div>
                <h2 className="font-extrabold text-lg">Connect with <br /> Confidence</h2>
                <p className="text-muted-foreground text-sm">Profiles fully revealed.<br />Connect over secure in-app<br />chat and move forward.</p>
            </div>
        </div>

        <div className="flex md:hidden flex-col px-6 pt-12">
            {steps.map((step, i) => (
                <div key={step.title} className="flex flex-row gap-4">
                    <div className="flex flex-col items-center">
                        <div className="w-[56px] h-[56px] shrink-0 rounded-full bg-[#FDECEA] flex items-center justify-center">
                            {step.icon}
                        </div>
                        {i < steps.length - 1 && (
                            <div className="w-px flex-1 bg-[#E8D5D3] my-1" />
                        )}
                    </div>
                    <div className="pb-8">
                        <h2 className="font-extrabold text-base mb-1">{step.title}</h2>
                        <p className="text-muted-foreground text-xs">{step.text}</p>
                    </div>
                </div>
            ))}
        </div>

        </div>
    )
}