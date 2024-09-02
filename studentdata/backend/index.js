import express from 'express';  

const app = express();

app.get('/api/student',(req,res) => {
   const student = [
    {
        id:1,
        Name:"aram",
        branch:"computer science and engineering",
        father_name:"Sam",
    },
    {
        id:2,
        Name:"tarun",
        branch:"civil engineering",
        father_name:"Ram",
    },
    {
        id:3,
        Name:"tom",
        branch:"computer science and engineering",
        father_name:"curren",
    },
    {
        id:4,
        Name:"david",
        branch:"Mechanical engineering",
        father_name:"warner",
    },
    {
        id:5,
        Name:"shimron",
        branch:"Electrical  engineering",
        father_name:"hetmiyer",
    },
    {
        id:6,
        Name:"trent",
        branch:"computer science and engineering",
        father_name:"boult",
    },
    {
        id:7,
        Name:"adam",
        branch:"Mechanical engineering",
        father_name:"jampa",
    },
    {
        id:8,
        Name:"mitchel",
        branch:"Electrical engineering",
        father_name:"dhoniRam",
    },
    {
        id:9,
        Name:"anmol",
        branch:"computer science and engineering",
        father_name:"kuldeep",
    },
    {
        id:10,
        Name:"manoj",
        branch:"civil engineering",
        father_name:"pushpender",
    },
   ]
   res.send(student);
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
        console.log(`Serve at http://localhost:${port}`)
});