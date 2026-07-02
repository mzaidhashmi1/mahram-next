import Image from "next/image";

export function Available() {
    return(
        <div className="relative bg-[#FFECE8] w-[92%] md:w-[990px] h-auto md:h-[350px] rounded-3xl flex flex-col md:flex-row items-center md:items-end justify-start md:justify-between gap-5 px-6 md:px-20 pt-8 md:pt-0 pb-10 md:pb-0 mx-auto overflow-visible">
            
            <div className="relative bg-black w-[160px] h-[320px] md:w-[240px] md:h-[480px] rounded-[35px] md:rounded-[50px] border-[3px] border-[#2C2C2C] shrink-0 p-2 md:p-3 mt-0 md:-mt-40 mb-0 mx-auto md:mx-0">
                <div className="relative w-full h-full rounded-[26px] md:rounded-[38px] overflow-hidden border-2 border-gray-800/60">
                    <Image
                        src="/IMG_3188.webp"
                        alt="App screenshot"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute top-2 md:top-3 left-1/2 -translate-x-1/2 w-16 md:w-25 h-3 md:h-4 bg-black rounded-b-2xl z-20 border-2 border-t-0 border-gray-800/60" />
            </div>

            <div className="pb-0 md:pb-10 text-center md:text-left">
                <h2 className="text-2xl md:text-5xl font-extrabold pb-3 md:pb-5">
                    Available on iOS <br className="hidden md:block" /> and Android
                </h2>
                <p className="text-muted-foreground text-sm md:text-xl pb-4 md:pb-6">Even more features in the app</p>
                <div className="flex items-center justify-center md:justify-start gap-3 md:gap-4">
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
            </div>

        </div>
    )
}