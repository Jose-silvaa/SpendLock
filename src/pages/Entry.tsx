import {NavigationMenuEntry} from "@/components/navigation-entry.js";


export function Entry() {
    return (
        <div className="flex flex-col">
            <header className="">
                <NavigationMenuEntry/>
            </header>
            <main className="bg-white text-center h-[94.7vh] flex flex-col justify-center items-center">
                <h2 className="text-6xl font-semibold">Smart Control of Your Spending</h2>
                <p className="font-normal text-[#696f9a] text-center w-[600px] mt-2 text-xl">Take control of your finances with smart insights for better decisions.</p>
            </main>

        </div>
    );
}