

function Skils() {
    const skillCategories = {
        "AI / ML": [
            "OpenAI", "TensorFlow", "Pytorch", "Hugging Face",
            "Langchain", "N8N"
        ],
        "Web3": [
            "Ethereum", "Solidity", "Hardhat", "Web3.js", "Ethers.js",
            "Solana", "Anchor", "IPFS", "Chainlink", "Wallet Connect"
        ],
        "Full Stack": [
            "React", "Next", "Vue", "Svelte", "Tailwind CSS", "shadcn/ui",
            "Node", "Express", "Nest", "Python", "Django", "FastAPI",
            "Laravel", "GraphQL", "Prisma", "MySQL", "MongoDB", "PostgreSQL",
            "Firebase", "Supabase", "Shopify", "Medusa", "Stripe",
            "React Native", "Expo", "Flutter", "Chrome Extension", "AWS",
            "Vercel", "Docker"
        ]
    };

    return (
        <section className="ml-[25rem] mr-6 px-10" >
            {Object.entries(skillCategories).map(([category, skills]) => (
                <div key={category} className="mb-10">
                    <h3 className="text-lg font-semibold mb-5 flex items-center gap-2" >
                        {category === "AI / ML" && "🧠"
                        }
                        {category === "Web3" && "₿"}
                        {category === "Full Stack" && "💻"}
                        <span>{category}</span>
                    </h3 >
                    <div className="flex flex-wrap gap-3">
                        {skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-4 py-2 bg-gray-900/50 border border-gray-800 rounded-lg hover:bg-gray-800/50 hover:border-gray-700 transition text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div >
            ))}
        </section >
    );
};



export default Skils