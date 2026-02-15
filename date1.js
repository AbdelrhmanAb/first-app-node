
const fs = require("node:fs")

//// ----------------- ADD PERSON ------------////
const addPerson2 = (id, firstName, LastName, city, age) => {

    const person = {
        id,
        firstName,
        LastName,
        city,
        age
    }
    const newdate = loadData()


    const exisit = newdate.filter((item) => {
        return item.id === person.id

    })

    if (exisit.length === 0) {
        newdate.push(person)
        savealldata(newdate)
             console.log("-------------------------------");

        console.log("the person is added");

        console.log("-------------------------------");


    } else {
        console.log("-------------------------------");

        console.log("the person is used");

        console.log("-------------------------------");

    }

}

//// ----------------- ADD PERSON ------------////


////////////////////////////////////////
const loadData = () => {
    try {
        const date = fs.readFileSync("./data1.json", "utf8")
        const newdate = JSON.parse(date)
        return newdate

    } catch {

        return []
    }
}

const savealldata = (allDate) => {
    fs.writeFileSync("data1.json", JSON.stringify(allDate))

}
//////////////////////////////////////////////


//// ----------------- DELETE PERSON ------------////
const Delete =(id)=>{
    const date = loadData()

    const newdate = date.filter((item)=>{
        return item.id !== id
    })
    savealldata(newdate)
}
//// ----------------- DELETE PERSON ------------////


//// ----------------- READ PERSON ------------////

const ReadPerson = (id)=>{
    const date = loadData()
    const item = date.find((item)=>{
        return item.id === id
    })

    if (item) {
        console.log("-----------------------")
        console.log(item);
        
        console.log("-----------------------")
        
    }else{
        console.log("-----------------------")
        console.log("ITEM IS NOT DEFIND");
        
        console.log("-----------------------")
        
        
    }
}

const ReadAllDate = ()=>{
    const data = loadData()
    data.forEach(element => {
        console.table(element)
        
    });
}

//// ----------------- READ PERSON ------------////



module.exports = {
    addPerson2,
    Delete,
    ReadPerson,
    ReadAllDate
}

