const jsonObject = {
    profile: { name: "Amit Kumar", age: 34 }, education: [{ qualification: "MCA", university: "SMU", year: 2017 }, { qualification: "BCA", university: "MDU", year: 2011 },
    {
        qualification: "10+2",
        university: "BIEC",
        year: 2005
    },
    {
        qualification: "10th",
        university: "CBSE",
        year: 2003
    }
    ],
    experience: [
        {
            company: "Concretio Apps Private Limited",
            designation: "Associate Salesforce Consultant",
            years: 1.8
        },
        {
            company: "Elegance Enterprises",
            designation: "Java Web Developer",
            years: 3
        }
    ]
};

let jsonString = JSON.stringify(jsonObject);
console.log(jsonObject);
console.log(jsonString);