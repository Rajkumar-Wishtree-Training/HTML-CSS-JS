const {createReadStream , createWriteStream} = require('fs');
const rstream = createReadStream('video.mp4');
const wstream = createWriteStream('video1.mp4');
rstream.pipe(wstream);