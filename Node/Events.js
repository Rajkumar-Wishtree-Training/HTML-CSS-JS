var http = require("http");
var fs = require("fs");
const EventEmitter = require("events");

   
// const events = new EventEmitter();
// // console.log(events);
// events.on('myName',()=>{
//     console.log("My name is khan");
//     // alert('calll');
// });
// events.on('myName' , (name , networth)=>{
//     console.log("My name is PAtel "+name + " netWorth is "+ networth +" cr")
//     // confirm("final bol kya karna hai")
// });
// events.emit('myName','Rajkumar',200);
// // Node Execute only those events which are listed before emiting it
// //WE can give any name to our event in node.js eg. 'myName' etc.
