//---------------Задача 1 ---------------------------
/*const http = require ('http');
const server = http.createServer((request, response)=> {
	console.log ('HTTP works!');
})
server.listen (8080);*/

//-------------------------------------------------------

//---------------------Задача 2 -------------------------

/*const http = require ('http');
http.createServer((request, response)=> {
	console.log ("HTTP works!");
	response.writeHead (200,{'Content-Type':'text/html'});
	response.write('<h1>Hello</h1>');
	response.end();
}).listen (8080);*/

//------------------------------------------------------------
//------------------Задача 3 -----------------------------------
const http = require ('http');
const fs = require ('fs');
const filename = "index.html";

http.createServer((request, response)=> {
	fs.readFile(filename, 'utf8',(err,data)=>{
		if (err){
			console.log ('Could not find or open file for reading\n');
			response.statusCode = 404;
			response.end();
		}else{

			console.log('The file ${filename} is read and set to the client\n');
			response.writeHead (200,{'Content-Type':'text/html'});
			response.end(data);
		}
	});

	console.log("Request accepted!");
}).listen(8080, ()=>{
	console.log("HTTP server works in 8080 port!\n");
});	
	


