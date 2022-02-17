const rsstream = fs.createReadStream("video.mp4");
const wsstream = fs.createWriteStream('video1.mp4');
rsstream.on("data", (chunk) => {
const result = wsstream.write(chunk)
if(!result){
    console.log('backPresure');
    rsstream.pause();
}
// console.log(chunk)
});
rsstream.on("end",()=>{
    // wsstream.end();
    console.log("End")
});
rsstream.on("error",(error)=>{
    // res.write(error);
    console.log(error)
    // res.end();
})
wsstream.on('drain',()=>{
    console.log("drained");
    rsstream.resume();
})
wsstream.on('close',()=>{
  console.log("file copied");
})