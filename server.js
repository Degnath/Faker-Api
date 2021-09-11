const express = require("express");
const app = express();
const port = 8000;
var faker = require('faker');



class User{
    constructor(){
        this._id = faker.datatype.uuid()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.phoneNumber = faker.phone.phoneNumber()
        this.eamil = faker.internet.email()
        this.password = faker.internet.password()
        this.image = faker.image.image()
        this.sentences = faker.lorem.sentences()
    }

}

class Company {
    constructor(){
        this._id= faker.datatype.uuid()
        this.name= faker.name.jobTitle()
        this.address = {street: faker.address.streetName(),
                        city: faker.address.cityName(),
                        state: faker.address.state(),
                        zipCode: faker.address.zipCode(),
                        country: faker.address.country()}
    }
}


app.get("/api/users/new", (req,res)=>{
    let newUser = new User()
    res.json({data: newUser})
})

app.get("/api/companies/new", (req, res)=>{
    let newCompany = new Company()
    res.json({data: newCompany})
})

app.get("/api/user/company", (req, res) =>{
    let newUser = new User();
    let newCompany = new Company();
    res.json({data: {newUser, newCompany}})
})





app.listen( port, () => console.log(`Listening on port: ${port}`) );