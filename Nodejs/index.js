var hel = require('./hello')
const data = require('./hello')
const http = require('http');
const fs = require('fs');
const path = require('path');


http.createServer((req,res)=>{
    res.write("Hello this is function");
    res.end();
}).listen(3000);


http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(3243);


// const input = process.argv;
// fs.writeFileSync(input[2],input[3]);
// console.log(input);

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4]);
// }else if(input[2]=='remove'){
//     fs.unlinkSync(input[3]);
// }else{
//     console.log("invalid input");
// }


// const path = require('path');
// const dirPath = path.join(__dirname,'files');
// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath +`/hello${i}.txt`,"a simple text");
// }
// console.log(dirPath);


// fs.readdir(dirPath,(err,files)=>{
//     if(err){
//         throw new Error("Response is not correct");
//     }else{
//         files.forEach(item => {
//             console.log(item);
//         });
//     }
// })
// fs.writeFileSync("data.txt","this is data file");

const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/data.txt`;
fs.writeFile(filePath,'after changed something',(err,data)=>{
    console.log("56",data);
});

fs.readFile("data.txt", 'utf-8',(err,item)=>{
    console.log("60",item);
});

fs.appendFile(filePath,"Ok oK added some",(err,item)=>{
    console.log("64",item);
})

const express = require('express');
const app = express();

app.get('url',(req,res)=>{
    if(url==""){
        res.send("this is some")
    }else if(url == "/home"){
        res.send('Hello, this is home page')
    }
})

// app.get('/about',(req,res)=>{
//     res.send('Hello, this is About page')
// })

// app.get('/footer',(req,res)=>{
//     res.send('Hello, this is footer page')
// })

// app.get(
// )

app.listen(3456);
