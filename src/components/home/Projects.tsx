import { CardItem, CardBody, CardContainer } from "../ui/3d-card";

const Projects = () => {
    return (
        <div>
            <div className="py-32">
                <p className="font-mono">PROJECTS 2023 - 2025</p>
                <h2 className="text-[5vw]">Selected Projects</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
                <div>
                    <CardContainer className="h-[600px]">
                        <CardBody className="flex flex-col justify-between bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[auto] sm:w-[30vw] h-[100%] rounded-xl p-6 border">
                            <div>
                                <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                Make things float in air
                                </CardItem>
                                <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                Hover over this card to unleash the power of CSS perspective
                                </CardItem>
                            </div>
                            <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src="public/images/projects-image/homeserve.jpg"
                                height="1000"
                                width="1000"
                                className="h-[100%] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Discover →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Homeserve
                            </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer> 
                </div>
                <div>
                    <CardContainer className="h-[600px]">
                        <CardBody className="flex flex-col justify-between bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[auto] sm:w-[30vw] h-[100%] rounded-xl p-6 border">
                            <div>
                                <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                Make things float in air
                                </CardItem>
                                <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                Hover over this card to unleash the power of CSS perspective
                                </CardItem>
                            </div>
                            <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src="public/images/projects-image/homeserve.jpg"
                                height="1000"
                                width="1000"
                                className="h-[100%] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Discover →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Homeserve
                            </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer> 
                </div>
                <div>
                    <CardContainer className="h-[600px]">
                        <CardBody className="flex flex-col justify-between bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[auto] sm:w-[30vw] h-[100%] rounded-xl p-6 border">
                            <div>
                                <CardItem
                                translateZ="50"
                                className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                Make things float in air
                                </CardItem>
                                <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                Hover over this card to unleash the power of CSS perspective
                                </CardItem>
                            </div>
                            <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src="public/images/projects-image/homeserve.jpg"
                                height="1000"
                                width="1000"
                                className="h-[100%] w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Discover →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Homeserve
                            </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer> 
                </div>

                <div>
                    <CardContainer>
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30vw] h-auto rounded-xl p-6 border  ">
                            <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                            Make things float in air
                            </CardItem>
                            <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                            Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src=""
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer> 
                </div>
                <div>
                    <CardContainer>
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30vw] h-auto rounded-xl p-6 border  ">
                            <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                            Make things float in air
                            </CardItem>
                            <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                            Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src=""
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer> 
                </div>
                <div>
                    <CardContainer>
                        <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30vw] h-auto rounded-xl p-6 border  ">
                            <CardItem
                            translateZ="50"
                            className="text-xl font-bold text-neutral-600 dark:text-white"
                            >
                            Make things float in air
                            </CardItem>
                            <CardItem
                            as="p"
                            translateZ="60"
                            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                            >
                            Hover over this card to unleash the power of CSS perspective
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                            <img
                                src=""
                                height="1000"
                                width="1000"
                                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            />
                            </CardItem>
                            <div className="flex justify-between items-center mt-20">
                            <CardItem
                                translateZ={20}
                                href="https://twitter.com/mannupaaji"
                                target="__blank"
                                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                            >
                                Try now →
                            </CardItem>
                            <CardItem
                                translateZ={20}
                                as="button"
                                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                            >
                                Sign up
                            </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer> 
                </div>
            </div>
        </div>
    );
};

export default Projects;