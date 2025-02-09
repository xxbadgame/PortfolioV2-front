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
        <div className="h-[50vh]">
            <p className="font-mono text-gray-400 font-semibold mt-24">FAQ</p>
            <h2 className="text-7xl my-16">Ask <Cover>Yannis AI</Cover> Anything</h2>

            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
            />
        </div>
    );
};

export default Ai