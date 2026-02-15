const yargs = require("yargs")
const date1 = require("./date1.js")

// ADD

yargs.command({
  command: "add",
  describe: "add person",

  builder: {
    id: {
      describe: "person id",
      demandOption: true,
      type: "number"
    },
    firstName: {
      describe: "first name",
      demandOption: true,
      type: "string"
    },
    lastName: {
      describe: "last name",
      demandOption: true,
      type: "string"
    },
    city: {
      describe: "city",
      type: "string"
    },
    age: {
      describe: "age",
      type: "number"
    }
  },

  handler: (x) => {
    date1.addPerson2(
      x.id,
      x.firstName,
      x.lastName,
      x.city,
      x.age
    )

  }
})


// DELETE

yargs.command({
    command:"delete",
    describe:"delete person",
    builder:{
        id:{
            describe:"delete",
            demandOption:true,
            type:"number" 
        }
    },
    handler:(x)=>{
        date1.Delete(x.id)
    }
})


yargs.command({
    command:"read",
    describe:"read a person",
    builder:{
        id:{
            describe:"",
            demandOption:true,
            type:"number"
        }
    },
    handler:(x)=>[
        date1.ReadPerson(x.id)
    ]
})

yargs.command({
    command:"readAllData",
    describe:"",
    builder:{}
    ,
    handler:()=>{
        date1.ReadAllDate()
    }
})

yargs.parse()
