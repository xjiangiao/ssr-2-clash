const http = require("http"); 
const url = require('url');
const  { graphql, buildSchema } = require('graphql');
const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const resolvers = {
  Query: {
    books: () => books,
  },
}

const server = new ApolloServer({ typeDefs, resolvers });

const start = (route,handle) =>{
  const onRequest = (req,resp)=>{
    // console.log(url.parse(req.url));
    const pathname= url.parse(req.url).pathname;
    console.log('request received.')
    route(handle,pathname);
    resp.writeHead(200, {"Content-Type": "text/plain"});
    resp.write("Hello World");
    resp.end();
  }
  http.createServer(onRequest).listen(8888);

  server.listen(4200).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });


  console.log("Server has started.");
}

exports.start = start