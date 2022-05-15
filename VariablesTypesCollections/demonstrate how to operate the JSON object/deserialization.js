const jsonString = '{"profile":{"name":"Amit Kumar","age":34},"education":[{"qualification":"MCA","university":"SMU","year":2017},{"qualification":"BCA","university":"MDU","year":2011},{"qualification":"10+2","university":"BIEC","year":2005},{"qualification":"10th","university":"CBSE","year":2003}],"experience":[{"company":"Concretio Apps Private Limited","designation":"Associate Salesforce Consultant","years":1.8},{"company":"Elegance Enterprises","designation":"Java Web Developer","years":3}]}';

const jsonObject = JSON.parse(jsonString);

console.log(jsonObject);

for(const prop in jsonObject){
    console.log(prop.toUpperCase());
    if(typeof jsonObject[prop] === "object"){
        for(const innerProp in jsonObject[prop]){
            if(typeof jsonObject[prop][innerProp] !== 'object'){
                console.log(innerProp+": "+jsonObject[prop][innerProp]);
            }
            else{
                const {qualification, university, year, company, designation, years} = jsonObject[prop][innerProp];
                if(qualification && university && year){
                    console.log(JSON.stringify(qualification+" from "+university+" in the year "+year));
                }
                else{
                    console.log(JSON.stringify("Worked in "+company+" as a(n) "+designation+" for "+years+" years"));
                }
            }
        }
    }
}