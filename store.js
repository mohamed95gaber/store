#!/usr/bin/env node
var fs =require('fs');


let args=process.argv.slice(2);



switch (args[0]){
case 'add':
 if(args.length < 4){
      console.log("enter new prop with space like that add key : value");
 }
  else{ 
      
      fs.readFile('file.json','utf8',(err,data)=>{
            if(data != ""){
                  var obj=JSON.parse(data);
                  console.log("old object :"+" "+data);
            } 
            else
            {
                  var obj={};      
            }     
            let key=args[1];           
             obj[key]=args[3];           
            let newData = JSON.stringify(obj);
            console.log("new object :" +" "+newData);
             fs.writeFileSync("file.json",newData);   
      })
  }
      break;
case 'list':
      fs.readFile('file.json','utf8',(err,data)=>{
        (!err && data != "")? console.log(data):console.log(err);

      })
      break;      
case 'get':
     fs.readFile('file.json','utf8',(err,data)=>{
           if(!err && data !=""){
            let key=args[1];  
            let obj=JSON.parse(data);
            if(obj[key] != undefined){
                  console.log("value= "+obj[key]);  
            }
            else{
                  console.log("key not found")
            }
           }
           else
           {
              console.log("the object is empty");
           }
      
       
     })
      break;      
case 'remove':
      fs.readFile("file.json",'utf8',(err,data)=>{
            if(!err && data !=""){
                  let key=args[1];  
                  let obj=JSON.parse(data);
                  if(obj[key] != undefined){
                        delete obj[key] ;
                        let newData = JSON.stringify(obj);
                        console.log("new object :" +" "+newData);
                         fs.writeFileSync("file.json",newData);  
                  }
                  else{
                        console.log("key not found")
                  }
                 }
                 else
                 {
                    console.log("the object is empty");
                 }
      })
      
      break;      
case 'clear':
      fs.truncate("file.json",(err)=>{
          (err) ?console.log(err):console.log("file is cleared");
      });
      break;      
 default:
      console.log("operation not valid");
}

