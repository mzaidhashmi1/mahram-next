import Image from "next/image";

export function Questions() {
    return(
        <div className="w-full bg-gradient-to-l from-[#9F250D] via-[#87190B] to-[#621108] flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-40 py-12 md:py-10 text-center md:text-left gap-8 md:gap-0">
            <div>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white pb-4 md:pb-5">
                    Trusted by Guardians. <br/>
                    Built for Families.
                </h1>
                <p className="text-white/70 text-sm md:text-xl">
                    Join thousands of families finding their perfect <br className="hidden md:block"/> match with Mahram.
                </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-3">
                <div className="flex items-center gap-3 md:gap-4">
                    <div className="bg-white rounded-2xl w-[150px] h-[48px] md:w-[215px] md:h-[60px] flex items-center gap-2 md:gap-3 px-3 md:px-4">
                        <Image src="/apple-logo-svgrepo-com.svg" alt="Apple logo" width={20} height={20} className="md:w-7 md:h-7" />
                        <div>
                            <p className="uppercase text-gray-600 text-[7px] md:text-[10px] leading-none font-bold">Download on the</p>
                            <h1 className="text-sm md:text-xl font-bold leading-tight">App Store</h1>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl w-[150px] h-[48px] md:w-[215px] md:h-[60px] flex items-center gap-2 md:gap-3 px-3 md:px-4">
                        <Image src="/googleplay.svg" alt="Google Play logo" width={18} height={18} className="md:w-6 md:h-6" />
                        <div>
                            <p className="uppercase text-gray-600 text-[7px] md:text-[10px] font-bold leading-none">Get it on</p>
                            <h1 className="text-sm md:text-xl font-bold leading-tight">Google Play</h1>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                    <span className="text-[#30AF57] text-xs md:text-base">●</span> 
                    <p className="uppercase text-gray-200/50 text-[10px] md:text-xs font-semibold">available on android and ios</p>
                </div>
            </div>
        </div>
    )
}