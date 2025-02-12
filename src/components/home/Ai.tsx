import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { Cover } from "@/components/ui/cover";

const Ai = () => {

    const placeholders = [
        "What is the Yannis School?",
        "What is the most complex project?",
        "Where is Yannis located?",
        "What is their favorite technology?",
        "What is Yannis' favorite project?",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
      };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    };

    return (
        <div className="h-[100vh] flex justify-center items-center">
            <div className="px-8">
                <p className="font-mono text-gray-400 font-semibold">FAQ</p>
                <div>
                    <h2 className="text-4xl md:text-7xl py-14">Ask <Cover>Yannis AI</Cover> Anything</h2>
                    <div className="relative border rounded-2xl h-[40vh]">
                        <div className="absolute bottom-10 w-[100%] px-14">
                            <PlaceholdersAndVanishInput
                                placeholders={placeholders}
                                onChange={handleChange}
                                onSubmit={onSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ai