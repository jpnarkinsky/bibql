const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    books: [String]!
  }
`

const resolvers = {
  Query: {
    books: (_) => ['Matthew', 'Mark', 'Luke', 'John']
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
