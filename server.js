const express = require('express');
// console.log(express);

const faker = require('faker');
// console.log(faker);
// Store the return from the express to the var/const
const app = express();
// console.log(app);

// Create User Class
class User {
    constructor() {
        this.id = faker.datatype.uuid();
        this.firstname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
const myUser = new User();
// class Company

class Company {
    constructor() {
        this.id = faker.datatype.uuid();
        this.name = faker.company.companyName();
        this.street = faker.address.streetAddress();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.zipCode = faker.address.zipCodeByState();
        this.country = faker.address.country();
    }
}
const myCompany = new Company();
// console.log(new User())
const port = 8000;

// middleware
// accept json data

app.use(express.json())

// Routes for User
app.get("/api/users/new" ,(reqObj, resObj) =>{
    resObj.json(myUser)
})

// ====================NewCompany=============================================
const myCallBackFunc = (reqObj, resObj) => {
    resObj.json(myCompany)
}
// Route for company
// app.get("/api/user/company" ,(reqObj, resObj) =>{
//     resObj.json(myUser)
// })
app.get("/api/companies/new",(myCallBackFunc))




// =============================User/company===================================

app.get("/api/user/company", (reqObj,resObj) => {
    resObj.json({user:myUser, company:myCompany})
})



// Routes-------------------
app.get("/api", (reqObj, resObj) =>{
    console.log("DutTech.org")
    resObj.send("Hello from DutTech.org")
})

app.get("/api/json",(reqObj, resObj) =>{
    resObj.json({status: "ok"})
})



// always on the last and it starts the server
app.listen(port, () => {
    console.log(`>>> server started on port ${port} and is listening for REQuest to RESpond to`)
})