let buf = Buffer.alloc(7);
buf.write("Hello 12345");
console.log(buf);
console.log(buf.toString());



let buf2 = Buffer.from('Bhaskar is a coder');
console.log(buf2);
console.log(buf2.toString());
console.log(buf2.toJSON());