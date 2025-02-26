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
                        src="/images/projects-image/tiktok.png"
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
                    <p>
                        Development of an advanced TikTok bot capable of automatically posting multiple times per day.
                        This bot not only manages the scheduling and publishing of content but also generates engaging videos 
                        tailored to specific themes. Additionally, it creates follow-up or reaction videos designed to capture
                        viewers' attention, boost engagement, and increase visibility on the platform.    
                    </p>
                </div>
            </div>

            <div className="text-left flex flex-col gap-64">
                <div>
                    <div className="h-[20vh] sticky top-0 z-0">
                        <p>KEY MOMENT // 1</p>
                        <h3>Content Creation</h3>
                        <p>Download videos from platform like youtube and edit with python to create new content with footage. Find key moment who can catch people on video</p>
                    </div>
                    <div className="h-[120vh] relative z-10">
                        <img 
                            src="/images/projects-image/tiktok.png"
                            className="w-full h-full rounded-bl-[100px] object-cover group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                    </div>
                </div>
                <div className="relative flex h-screen">
                    <div className="sticky top-0 self-start w-1/2 p-4">
                        <p>KEY MOMENT // 2</p>
                        <h3>Algorithme and request</h3>
                        <p>
                        When the video is ready, we create a request to push it on TikTok.  
                        On GitHub, I found a signature that allows sending the video to my account.
                        </p>
                    </div>

                    <div className="w-1/2 h-[120vh]">
                        <img 
                        src="/images/projects-image/tiktok.png"
                        className="w-full h-full rounded-br-[100px] rounded-tl-[100px] object-cover"
                        alt="thumbnail"
                        />
                    </div>
                </div>
                <div className="">
                    <div className="h-[20vh] sticky top-0 z-0">
                        <p>KEY MOMENT // 3</p>
                        <h3>Put on server</h3>
                        <p>I want to regulary post so i put my program on rasbery pi for post at 7, 12 and 18h every day without open tiktok app myself.</p>
                    </div>
                    <div className="h-[120vh] relative z-10">
                        <img 
                            src="/images/projects-image/tiktok.png"
                            className="w-full h-full rounded-br-[100px] rounded-bl-[100px] object-cover"
                            alt="thumbnail"
                        />
                    </div>
                </div>
            </div>

            <div className="h-screen">
                <p>RESULT</p>
                <h2>TIKTOK AUTOMATION</h2>
                <p>This solution can evoluate on content creation obviously, i make video on my youtube channel with more details and fun !</p>
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