const Services = () => {

    const service_cards = {
        number : ["01", "02", "03", "04"],
        title : ["Branding & Marketing", "Website Design", "Website Development", "Application Design"],
        description : [
            "Branding that builds trust and drives loyalty through clear visuals and messaging.",
            "Engaging web design that enhances brand impact and drives conversions.",
            "No-code web development using tools like Webflow and Framer for fast, scalable solutions.",
            "User-focused app design that maximizes usability and encourages retention.",
        ],
        av1 : ["BRAND STARTEGY", "LANDING PAGES", "FRAMER", "MOBILE"],
        av2 : ["LOGO DESIGN", "CORPORATE WEBSITES", "WEBFLOW", "DESKTOP"],
        av3 : ["VISUAL IDENTITY", "BLOGS", "WORDPRESS", "COMPLEX SYSTEMS"],
        av4 : ["BRAND GUIDLINES", "E-COMMERCE", "WIX", "SAAS"],
    }

    return (
        <div>
            <div className="flex">
                <div className="w-[80%] flex flex-col text-left pt-24 gap-24">
                    <div className="pl-24">
                        <p className="font-mono text-gray-400 font-semibold">SERVICES</p>
                        <h2 className="text-[5vw] leading-none">Versatile & <br/> Results-Driven</h2>
                    </div>
                    <p className="text-4xl w-[50%] pl-24">
                        An all-in-one solution—everything you need to bring your vision to life, from start to finish.
                    </p>
                    <div className="flex">
                        { service_cards.number.map((item, index) => (
                                <div className="w-[25%] h-[400px] border p-8 flex flex-col gap-8">
                                    <div>
                                        <div key={index} className="border rounded-full w-12 h-12 flex justify-center items-center font-mono">{item}</div>
                                        <h3 className="mt-4 font-bold text-[3vw]">{service_cards.title[index]}</h3>
                                    </div>
                                    <p>{service_cards.description[index]}</p>
                                    <div>
                                        <p>{service_cards.av1[index]}</p>
                                        <p>{service_cards.av2[index]}</p>
                                        <p>{service_cards.av3[index]}</p>
                                        <p>{service_cards.av4[index]}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className="w-[20%] border-l border-b">
                    
                </div>
            </div>
        </div>
    );
};

export default Services