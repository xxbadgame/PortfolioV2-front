const TiktokPage = () => {

    return(
        <div>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="sticky top-0 h-screen flex flex-col justify-between text-left p-8">
                <div>
                    <p>2023</p>
                    <h1>Tiktok Bot</h1>
                </div>
                <div>
                    <div>
                    <p>SERVICES</p>
                    <p>Developpment</p>
                    </div>
                    <div>
                    <p>CLIENT</p>
                    <p>Personnal</p>
                    </div>
                    <div>
                    <p>TEAM</p>
                    <p>Solo</p>
                    </div>
                </div>
                </div>

                <div className="w-full md:w-[80vw] h-[150vh]">
                    <img
                        src={`/images/projects-image/tiktok.png`}
                        className="w-full h-full rounded-bl-[100px] object-cover group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </div>
            </div>

            <div className="flex justify-around p-16 h-[50vh] w-[100%] mt-24 text-left">
                <div className="w-[30%]">
                    <p>Adding a new category / diversifying content offerings</p>
                </div>
                <div className="w-[50%]">
                    <p>OVERVIEW</p>
                    <p>TikTok Bot</p>
                </div>
            </div>

            <div>
                <div className="h-screen">
                    <p>KEY MOMENT // 1</p>
                </div>
                <div className="h-screen">
                    <p>KEY MOMENT // 2</p>
                </div>
                <div className="h-screen">
                    <p>KEY MOMENT // 3</p>
                </div>
            </div>

            <div className="h-screen">
                <p>RESULT</p>
                <h2>TIKTOK AUTOMATION</h2>
                <p>Evoluating solution</p>
            </div>

            <div className="h-screen">
                <p>MORE PROJECTS</p>
                <h2>You might also like</h2>
                <div className="flex justify-between p-16">
                    <p className="w-[30%]">Homeserve</p>
                    <p className="w-[30%]">Osmoze</p>
                    <p className="w-[30%]">Youtube</p>
                </div>
            </div>
        </div>
    );
}

export default TiktokPage