import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { Cover } from "@/components/ui/cover";
import axios from 'axios';
import { useState } from "react";

const Ai = () => {

    const placeholders = [
        "What is the Yannis School?",
        "What is the most complex project?",
        "Where is Yannis located?",
        "What is their favorite technology?",
        "What is Yannis' favorite project?",
    ];

    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState<{ sender: 'user' | 'ai'; text: string }[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        setMessages((prev) => [...prev, { sender: 'user', text: inputValue }]);

        try {
            const response = await axios.post(
                'http://localhost:8000/api/chat/', 
                {data: inputValue}, 
                {headers: {'Content-Type': 'application/json'}}
            );
            
            const aiResponse = response.data.responseYAI;
            console.log(aiResponse);
            setMessages((prev) => [...prev, { sender: 'ai', text: aiResponse }]);
            setInputValue('');

            } catch (error) {
            console.error('There was an error!', error);
        }
    };

    return (
        <div className="h-[100vh] flex justify-center items-center" id="ai">
            <div className="px-8">
                <p className="font-mono text-gray-400 font-semibold">FAQ</p>
                <div>
                    <h2 className="text-4xl md:text-7xl py-14">Ask <Cover>Yannis AI</Cover> Anything</h2>
                    <div className="relative border rounded-2xl h-[40vh] overflow-hidden">
                        <div className="absolute bottom-10 w-[100%] px-14 overflow-hidden">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`max-w-[80%] p-3 rounded-2xl ${
                                        msg.sender === 'user'
                                            ? 'bg-blue-500 text-white self-end rounded-br-none'
                                            : 'bg-gray-200 text-black self-start rounded-bl-none'
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            ))}
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