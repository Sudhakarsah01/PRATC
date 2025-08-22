
// locking way in sync


const fs =require('fs');

// const name= "John Deo";
// const des="is decent guy";
// const age=25;
// console.log(name,des, ", his age is:", age);

const textIn = fs.readFileSync('./txt/dot.txt' ,'utf-8');
console.log(textIn);

const textout= `This is here : ${textIn}.\nCreated on ${Date.now()}`; 
fs.writeFileSync('./txt/textout.txt',textout);
console.log('file written sucessfully');








