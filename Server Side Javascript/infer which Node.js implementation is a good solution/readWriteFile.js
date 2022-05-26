const content = '{"name" : "Amit Kumar", "age" : 34, "qualification" : "MCA", "certification" : 3}';

const fs = require("fs");

fs.readFile("./user.json", "utf-8", (err,data) => {
    if(err){
        console.error(err);
        return;
    }
    console.log(data);

    fs.writeFile("./user.json", content, err => {
        if(err){
            console.log(err);
            return;
        }
        console.log("CONTENT REPLACED !!!");
    });
});