const Process = () => {

    return (
        <div className="flex flex-col gap-16 mt-24">
            <div>
                <p className="font-mono text-gray-400 font-semibold">PROCESS</p>
                <h2 className="text-8xl">3 Steps & <br/> It's Finished</h2>
            </div>
            <div>
                <p className="text-4xl">Quick and efficient, from concept to execution.</p>
                <p>The process may vary depending on the project's scope, so if you have questions or need more info, feel free to reach out!</p>
            </div>
            <div className="flex flex-col items-center py-16">
                <div className="w-12 h-12 border-[2px] border-neutral-800 rounded-full flex justify-center items-center">01</div>
                <div className="h-[50vh] w-[2px] bg-neutral-800"></div>
                <div className="w-12 h-12 border-[2px] border-neutral-800 rounded-full flex justify-center items-center">02</div>
                <div className="h-[50vh] w-[2px] bg-neutral-800"></div>
                <div className="w-12 h-12 border-[2px] border-neutral-800 rounded-full flex justify-center items-center">03</div>
                <div className="h-[50vh] w-[2px] bg-neutral-800"></div>
                <div className="w-28 h-28 border-[2px] border-neutral-800 rounded-full flex justify-center items-center">launch</div>
            </div>
        </div>
    );
};

export default Process