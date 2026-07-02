import { Card } from "./ui/card"
import { MapPin } from "lucide-react"
import Image from "next/image"

export function Hero(){
    return(
        <div className="relative h-auto pb-16 md:h-[720px] md:pb-0 overflow-visible">
            <div
                className="hidden md:block absolute inset-0 bg-gradient-to-l from-[#9F250D] via-[#87190B] to-[#621108]"
                style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }}
            />

            <div
                className="block md:hidden absolute inset-0 bg-gradient-to-l from-[#9F250D] via-[#87190B] to-[#621108]"
                style={{ clipPath: "ellipse(90% 55% at 50% 0%)" }}
            />

            <div className="relative z-10">
                <div>
                    <h1 className="text-center text-black text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold mt-6 md:mt-10 leading-none tracking-tighter bg-gradient-to-r from-white via-[#F7E8CC] to-[#EBC174] bg-clip-text text-transparent">
                        Find your <br /> ideal match
                    </h1>
                </div>
                <div className="flex flex-row pt-5 justify-center items-center gap-6 md:gap-15 overflow-x-clip">

                    <div className="hidden md:block shrink-0">
                        <Card
                        className="mx-auto w-64 h-96 max-w-sm bg-cover bg-center flex flex-col justify-end p-3 relative overflow-hidden -rotate-12 mb-20"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>

                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#E26D55]/80 via-[#B8432F]/20 to-transparent" />

                        <div className="flex flex-col text-white relative z-10">
                            <div className="flex flex-row items-center">
                            <MapPin className="w-2 h-2"></MapPin>
                            <p className="text-xs text-white">Lahore, Punjab</p>
                            </div>
                            <h1 className="font-bold text-lg text-white">Assistant Dr, 24</h1>
                            <p className="text-xs text-white">Single, Islam<br />Medicine (MBBS), Bachelors</p>
                        </div>
                        </Card>
                    </div>

                    <div className="hidden md:block shrink-0">
                        <Card
                        className="mx-auto w-64 h-96 max-w-sm bg-cover bg-center flex flex-col justify-end p-3 relative overflow-hidden -rotate-6 mt-14"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>

                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#E26D55]/80 via-[#B8432F]/20 to-transparent" />

                        <div className="flex flex-col text-white relative z-10">
                            <div className="flex flex-row items-center">
                            <MapPin className="w-2 h-2"></MapPin>
                            <p className="text-xs">Tashkent, Uzbekistan</p>
                            </div>
                            <h1 className="font-bold text-lg">Software Engineer, 25</h1>
                            <p className="text-xs">Single, Islam<br />Software Engineering, Bachelors</p>
                        </div>
                        </Card>
                    </div>

                    <div className="relative bg-black w-[220px] h-[460px] rounded-[35px] border-[3px] border-[#2C2C2C] shrink-0 p-2 md:w-[330px] md:h-[690px] md:rounded-[50px] md:p-3 ">

                    <div className="relative w-full h-full rounded-[28px] md:rounded-[38px] overflow-hidden border-2 border-gray-800/60">
                        <Image
                            src="/IMG_3188.webp"
                            alt="App screenshot"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-20 h-5 md:w-30 md:h-7 bg-black rounded-b-2xl z-20 border-2 border-t-0 border-gray-800/60" />

                    </div>

                    <div className="hidden md:block shrink-0">
                        <Card
                        className="mx-auto w-64 h-96 max-w-sm bg-cover bg-center flex flex-col justify-end p-3 relative overflow-hidden rotate-6 mt-14"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>

                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#E26D55]/80 via-[#B8432F]/20 to-transparent" />

                        <div className="flex flex-col text-white relative z-10">
                            <div className="flex flex-row items-center">
                            <MapPin className="w-2 h-2"></MapPin>
                            <p className="text-xs">Almaty, Kazakhstan</p>
                            </div>
                            <h1 className="font-bold text-lg">Business Admin, 23</h1>
                            <p className="text-xs">Single, Islam<br />Business Admin, Bachelors</p>
                        </div>
                        </Card>
                    </div>

                    <div className="hidden md:block shrink-0">
                        <Card
                        className="mx-auto w-64 h-96 max-w-sm bg-cover bg-center flex flex-col justify-end p-3 relative overflow-hidden rotate-12 mb-20"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>

                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#81170B]/80 via-[#5D1108]/20 to-transparent" />

                        <div className="flex flex-col text-white relative z-10">
                            <div className="flex flex-row items-center">
                            <MapPin className="w-2 h-2"></MapPin>
                            <p className="text-xs text-white">Karachi, Sindh</p>
                            </div>
                            <h1 className="font-bold text-lg text-white">Finance Manager, 30</h1>
                            <p className="text-xs text-white">Single, Islam<br />MBA Finance, Masters</p>
                        </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
)}