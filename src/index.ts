import { Gender, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function  createUser(username:string,phone_number :string,password_hash:string,location:string,gender:Gender,email:string,dob :Date,) {

 const response = await  prisma.users.create({
        data:{
            username,
            password_hash,
            phone_number,
            location,
            email,
            gender,
            dob

        }
    })
    
    console.log(response)
}

createUser(
    "Spiderrman",
    "93847562538",
    "hashedshhhh",
    "delhiuniversity",
    "MALE",
    "rishabhspoder@gmail.com",
    new Date("2005-01-01") 
);

createUser(
    "Mrdetective",
    "9384799253",
    "hashedshhhh2",
    "delhiuniversity",
    "MALE",
    "shadow@gmail.com",
    new Date("1303-12-05") // Correctly creates a Date object
);

 