const route=(handler,pathname)=>{
  console.log("the request route is "+pathname);
  if(typeof handler[pathname]==='function'){
    handler[pathname]()
  }else{
    console.log('No request handler found for'+pathname)
  }
}


exports.route = route