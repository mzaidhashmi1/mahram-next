import { Badge } from "@/components/ui/badge"
import { Card } from "./ui/card"
import { MapPin } from "lucide-react"
import { Heart } from "lucide-react"
import { Button } from "./ui/button"
import { Lock } from "lucide-react"

export function WhyMahram(){
    return(
        <div className="pb-12 pt-32 md:pb-20 md:pt-80">
            <h2 className="text-center text-3xl md:text-6xl font-extrabold pb-10 md:pb-22">Why Mahram?</h2>

            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-80 px-6 md:px-66">
                <div className="flex flex-col pt-0 md:pt-12 text-center md:text-left">
                <Badge variant="why" className="font-bold text-[10px] md:text-xs mb-4 md:mb-5">BY GUARDIANS, FOR GUARDIANS</Badge>
                <h1 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-5">Only serious families <br className="hidden md:block" /> make it here.</h1>
                <p className="text-muted-foreground text-xs md:text-sm">Every guardian and prospect is CNIC <br className="hidden md:block" />verified before going live. No fake profiles, <br className="hidden md:block" />no time wasters.</p>
                </div>
                <div className="relative w-72 h-72 mx-auto md:w-auto md:h-96 md:mx-0">
                    <div className="bg-white w-[110px] h-[42px] md:w-[150px] md:h-[55px] rounded-xl md:rounded-2xl z-50 absolute flex flex-row items-center px-2 ml-24 mt-3 md:ml-45 md:mt-5 shadow-[0_8px_15px_rgba(0,0,0,0.3)]">
                        <div className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] rounded-full bg-gradient-to-l from-[#9F250D] via-[#87190B] to-[#621108] flex items-center justify-center shrink-0">
                            <Heart className="text-white items-center w-3 h-3 md:w-4 md:h-4"></Heart>
                        </div>
                        <p className="text-black text-xs md:text-sm font-bold ml-2">87% Match</p>
                    </div>
                <Card
                    className="absolute w-40 h-56 md:w-56 md:h-72 bg-cover bg-center flex flex-col justify-end p-2 md:p-3 overflow-hidden rounded-2xl md:rounded-3xl rotate-7 left-24 top-10 md:left-33 md:top-17"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                >
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#E26D55]/80 via-[#B8432F]/20 to-transparent" />
                    <div className="relative z-10 flex flex-col text-white/90">
                    <div className="flex flex-row items-center">
                        <MapPin className="w-2 h-2" />
                        <p className="text-[10px] md:text-xs">Almaty, Kazakhstan</p>
                    </div>
                    <h1 className="font-bold text-sm md:text-lg">Business Admin, 23</h1>
                    <p className="text-[10px] md:text-xs">Single, Islam<br />Business Admin, Bachelors</p>
                    </div>
                </Card>
                <Card
                    className="absolute w-44 h-60 md:w-60 md:h-80 bg-cover bg-center flex flex-col justify-end p-2 md:p-3 overflow-hidden rounded-2xl md:rounded-3xl left-0 top-6 md:top-8 z-10"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
                >
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#E26D55]/80 via-[#A52B0D]/20 to-transparent" />
                    <div className="relative z-10 flex flex-col text-white/90">
                    <div className="flex flex-row items-center">
                        <MapPin className="w-2 h-2" />
                        <p className="text-[10px] md:text-xs">Lahore, Punjab</p>
                    </div>
                    <h1 className="font-bold text-sm md:text-lg">Assistant Dr, 24</h1>
                    <p className="text-[10px] md:text-xs">Single, Islam<br />Medicine (MBBS), Bachelors</p>
                    </div>
                </Card>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10 md:gap-74 px-6 md:px-66 pt-14 md:pt-5">
                <div>
                <Card
                className="w-64 h-80 md:w-70 md:h-90 max-w-sm bg-cover bg-center flex flex-col justify-end p-3 relative overflow-hidden"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>

                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#E26D55]/80 via-[#B8432F]/20 to-transparent" />

                <div className="flex flex-col text-white ">
                    <div className="flex flex-row items-center">
                    <MapPin className="w-2 h-2"></MapPin>
                    <p className="text-[10px] md:text-xs">Lahore, Punjab</p>
                    </div>
                    <h1 className="font-bold text-sm md:text-lg">Anchor, 29</h1>
                    <p className="text-[10px] md:text-xs">Single, Islam<br />Mass Communication, Bachelors</p>
                </div>
                <Button className="font-bold text-[10px] md:text-xs h-8 md:h-10 bg-[#225E4D] z-50">Unlock Profile</Button>
                </Card>
                </div>
                <div className="flex flex-col pt-0 md:pt-12 text-center md:text-left">
                    <Badge variant="why" className="font-bold text-[10px] md:text-xs mb-4 md:mb-5">YOU'RE IN CONTROL</Badge>
                    <h1 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-5">Your family. <br className="hidden md:block" /> Your rules.</h1>
                    <p className="text-muted-foreground text-xs md:text-sm">Prospects appear with limited information <br className="hidden md:block" /> by default. When someone sends you an <br className="hidden md:block" />unlock request, you decide — accept to <br className="hidden md:block" /> reveal the full profile to each other, or <br className="hidden md:block" /> reject to stay private.</p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 md:gap-80 px-6 md:px-66 pt-14 md:pt-5">
                <div className="flex flex-col pt-0 md:pt-12 text-center md:text-left">
                    <Badge variant="why" className="font-bold text-[10px] md:text-xs mb-4 md:mb-5">DATA PRIVACY</Badge>
                    <h1 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-5">Private<br className="hidden md:block" />by design.</h1>
                    <p className="text-muted-foreground text-xs md:text-sm">Your information is encrypted and<br className="hidden md:block" />protected. What others see is only what<br className="hidden md:block" />you choose to unlock.</p>
                </div>

                <Card className="w-72 h-56 md:w-[440px] md:h-[330px] bg-[#FDF8F7] flex flex-col items-center justify-center rounded-3xl border-[#F5EDED] gap-3 md:gap-4 shadow-sm">
                    <div className="w-14 h-14 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-gradient-to-l from-[#9F250D] via-[#A52B0D] to-[#621108] flex items-center justify-center">
                        <Lock className="text-white h-6 w-6 md:h-9 md:w-9" />
                    </div>
                    <div className="text-center">
                        <h1 className="font-bold text-sm md:text-md">End-to-End Encrypted</h1>
                        <p className="text-muted-foreground text-[10px] md:text-xs">Your data is always protected</p>
                    </div>
                </Card>
            </div>

            <div>
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-34 px-6 md:px-66 pt-14 md:pt-5">

                <Card className="relative w-72 h-72 md:w-[440px] md:h-[330px] bg-[#FDF8F7] flex flex-col items-center justify-center rounded-3xl border-[#F5EDED] gap-4 shadow-sm overflow-hidden md:overflow-visible">
                    <div className="absolute top-0 left-0 bg-white w-full md:w-[440px] h-[50px] md:h-[70px] rounded-t-3xl flex flex-row">
                        <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-gradient-to-l from-[#9F250D] via-[#A52B0D] to-[#621108] mt-3 ml-3 md:mt-4 md:ml-4">
                            <h1 className="flex items-center justify-center font-bold text-xs md:text-md text-white pt-1.5 md:pt-2">A</h1>
                        </div>
                        <div className="flex flex-col justify-center ml-2 pt-1">
                            <h1 className="font-bold text-xs md:text-base">Ahmed's Father</h1>
                            <p className="text-[10px] md:text-xs text-[#00C950] font-semibold">• Online</p>
                        </div>
                    </div>
                    <div className="absolute top-14 left-3 md:top-20 md:left-4 bg-white w-[180px] h-[75px] md:w-[260px] md:h-[90px] rounded-2xl md:rounded-3xl rounded-tl-sm shadow-md">
                        <p className="text-black text-[10px] md:text-xs p-2 md:p-3">Assalamu Alaikum, we reviewed your <br className="hidden md:block" /> daughter's prospect and are very <br className="hidden md:block" /> interested.</p>
                        <p className="text-[9px] md:text-[10px] text-muted-foreground ml-2 md:ml-3">10:32 AM</p>
                    </div>
                    <div className="absolute top-32 left-24 md:top-45 md:left-40 bg-gradient-to-l from-[#9F250D] via-[#A52B0D] to-[#621108] w-[180px] h-[60px] md:w-[260px] md:h-[70px] rounded-2xl md:rounded-3xl rounded-tr-sm shadow-md">
                        <p className="text-white text-[10px] md:text-xs ml-2 md:ml-3 mt-1.5 md:mt-2">Wa Alaikum Assalam! JazakAllah. We'd be<br className="hidden md:block" />happy to discuss further.</p>
                        <p className="text-[9px] md:text-[10px] text-white/70 ml-24 md:ml-50 mt-1">10:34 AM</p>
                    </div>
                    <div className="absolute top-[188px] left-3 md:top-65 md:left-4 bg-white w-[180px] h-[58px] md:w-[260px] md:h-[65px] rounded-2xl md:rounded-3xl rounded-tl-sm shadow-md">
                        <p className="text-black text-[10px] md:text-xs ml-2 md:ml-3 mt-1.5 md:mt-2">Could we arrange a family meeting at your<br className="hidden md:block" />convenience?</p>
                        <p className="text-[9px] md:text-[10px] text-muted-foreground ml-2 md:ml-3 mt-1">10:37 AM</p>
                    </div>
                </Card>

                <div className="flex flex-col pt-0 md:pt-12 text-center md:text-left">
                    <Badge variant="why" className="font-bold text-[10px] md:text-xs mb-4 md:mb-5">INN-APP CHAT</Badge>
                    <h1 className="text-2xl md:text-4xl font-extrabold mb-3 md:mb-5">No numbers.<br className="hidden md:block" />No exposure.</h1>
                    <p className="text-muted-foreground text-xs md:text-sm">Contact information is never shared.<br className="hidden md:block" />Guardians communicate entirely through<br className="hidden md:block" />Mahram's secure in-app chat — until both <br className="hidden md:block" />families are ready.</p>
                </div>
            </div>


            </div>
        </div>

    )
}   