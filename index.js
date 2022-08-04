// fs module is stand for file system
const fs =  require('fs');
// this module help we will read,write the data in file

// syncronous version of file reading
// it will take two para first para the location of file which we reading & second para character encoding
const textIn = fs.readFileSync('./text/input.txt','utf-8');

const textOut = `This is what we know about this file: ${textIn}.\nCreated on ${Date.now()}`;
// writting data on server file
fs.writeFileSync('./text/output.txt',textOut); //in this method we take 2 para one file path & other is what we want to write in our file
// console.log('file has been written');

// asyncronous way of file reading & there is no need to defining character encoding we can use second para call back function which hold our result
fs.readFile('./text/start.txt','utf-8',(err,data)=>{
    console.log(data);
});

// call back hell
fs.readFile('./text/start.txt','utf-8',(err,data1)=>{
fs.readFile(`./text/${data1}.txt`,'utf-8',(err,data2)=>{
    console.log(data2);
fs.readFile('./text/append.txt','utf-8',(err,data3)=>{
     console.log(data3);

fs.writeFile('./text/final.txt', `${data2}\n${data3}`,'utf-8',err =>{
      console.log('your text has been written');

    });
});
});
});

console.log('will read file!');



