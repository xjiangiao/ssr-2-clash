const exec = require("child_process").exec;

const start=(response)=>{
  console.log(`request handler 'start' was called`);
  let content = "empty";

  exec("ls -lah", function (error, stdout, stderr) {
    content = stdout;
  });
  return content;
//   const innerHTMLContent = `
//   <html>
//   <head>
//     <meta http-equiv="Content-Type" content="text/html;" charset="UTF-8" />
//   </head>
// <body>
//   <form action="/upload" method="POST">
//     <textarea name="text" id="test" cols="0" rows="10"></textarea>
//     <input type="submit" value="submit text"/>
//   </form>
// </body>
// </html>
//   `
//   response.writeHead(200, {"Content-Type": "text/html"});
//   response.write(innerHTMLContent);
  response.end();
}

const upload = (response)=>{
  console.log(`request handler 'upload' was called`);
  // response.writeHead(200, {"Content-Type": "text/plain"});
  // response.write("Hello Upload");
  // response.end();
  return "Hello Upload";
}

exports.start = start;
exports.upload = upload;