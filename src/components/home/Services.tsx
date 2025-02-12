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
        <div className="flex flex-col md:flex-row">
            <div className="w-[100%] md:w-[80%] flex flex-col text-left pt-24 gap-24">
                <div className="px-8 md:pl-24">
                    <p className="font-mono text-gray-400 font-semibold">SERVICES</p>
                    <h2 className="text-[9vw] md:text-[5vw] leading-none">Versatile & <br/> Results-Driven</h2>
                </div>
                <p className="text-[5vw] md:text-4xl md:w-[50%] md:pl-24 px-8">
                    An all-in-one solution—everything you need to bring your vision to life, from start to finish.
                </p>
                <div className="flex md:flex-row flex-col">
                    { service_cards.number.map((item, index) => (
                            <div className="w-[100%] md:w-[25%] border p-8 flex flex-col gap-8">
                                <div>
                                    <div key={index} className="border rounded-full w-12 h-12 flex justify-center items-center font-mono">{item}</div>
                                    <h3 className="h-[15vh] mt-4 font-bold text-[2vw]">{service_cards.title[index]}</h3>
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
                <p>Réseaux sociaux</p>
            </div>
        </div>
    );
};

export default Services