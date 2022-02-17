const buf = Buffer.from('Rajkumar');
console.log(buf[0] , buf[1], buf[2] , buf[3]);
buf[0] = 76;
console.log(buf.toString())