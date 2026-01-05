import { MdOutlineArrowOutward } from "react-icons/md";

export default function Experiance() {
    const experiance = [
        {
            title: "Software Engineer",
            company: "Atlas Computer Technology",
            location: "Addis Ababa, Ethiopia",
            employmentType: "Full-time",
            date: "2023-2025",
            description: "I worked on the Atlas Computer Technology team as a Software Engineer",
        },
        {
            title: "Full Stack Developer",
            company: "ALX Ventures",
            location: "Addis Ababa, Ethiopia",
            employmentType: "Remote",
            date: "2024-2025",
            description: "I worked on the ALX Ventures team as a Full Stack Developer",
        },
        {
            title: "Senior Frontend Developer",
            company: "Atlas Computer Technology",
            location: "Addis Ababa, Ethiopia",
            employmentType: "Full-time",
            date: "2026-Present",
            description: "I worked on the ALX Ventures team as a Senior Frontend Developer",
        },
        {
            title: "Full Stack Gen AI Developer",
            company: "Humanodize Ventures",
            location: "De' france , France",
            employmentType: "Remote",
            date: "2025-Present",
            description: "I worked on the Humanodize Ventures team as a Full Stack Gen AI Developer",
        },
    ];
    return (
        <div className="w-full h-full flex flex-col items-center justify-center bg-white p-2 rounded-2xl text-black">
            <div className="bg-gray-100 w-full h-full rounded-2xl flex flex-col items-start">

                <div className="flex items-center justify-between w-full px-4 py-2">
                    <h1 className="text-2xl font-bold rounded-3xl bg-white px-3 py-1 border border-gray-200">Experiance</h1>
                    <MdOutlineArrowOutward />
                </div>
                <div className="flex flex-col  p-4   w-full h-full">
                    {experiance.map((item) => (
                        <div key={item.title} className="flex flex-col relative border-l border-gray-400 p-6">
                            <div className="w-4 h-4 bg-[#333] rounded-full absolute -left-2 top-7"></div>
                            <h2 className="text-md font-bold">{item.title} @ {item.company}</h2>
                            <div className="flex items-center justify-between">
                                <p>{item.date}</p> - <span className="text-gray-500">{item.employmentType}</span>
                                <p>{item.location}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}