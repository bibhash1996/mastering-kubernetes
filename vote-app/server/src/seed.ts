import "dotenv/config"
import initialise, { db } from "./init";

async function seedData() {
    await initialise();

    await db.collection("votes").insertMany([{
        _id: "1" as any,
        "count": 0,
        language: "Node JS",
        description: "Nodejs Programming language"
    },
    {
        _id: "2" as any,
        "count": 0,
        language: "C++",
        description: "C++ Programming language"
    },
    {
        _id: "3" as any,
        "count": 0,
        language: ".NET",
        description: ".NET Programming language"
    },
    {
        _id: "4" as any,
        "count": 0,
        language: "Ruby",
        description: "Ruby Programming language"
    }, {
        _id: "5" as any,
        "count": 0,
        language: "Java",
        description: "Java Programming language"
    }, {
        _id: "6" as any,
        "count": 0,
        language: "Python",
        description: "Python Programming language"
    }
    ]);

    console.log("Data Seed done !!!")
}


seedData().catch(console.error)