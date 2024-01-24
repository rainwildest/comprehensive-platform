const PostModel = /* GraphQL */ `
  type Post {
    author: User
    content: String
    id: Int
    published: Boolean
    title: String
  }
`;

const UserModel = /* GraphQL */ `
  type User {
    id: Int
    name: String
    email: String
    password: String
    telphone: String
  }

  type SignIn {
    token: String
    user: User
  }
`;

const typeDefs = /* GraphQL */ `
  ${PostModel}

  ${UserModel}

  type Query {
    getUser(id: String!): User
    signIn(username: String!, password: String!): SignIn
  }

  type Mutation {
    createDraft(authorEmail: String, content: String, title: String!): Post
    deletePost(postId: String): Post
    publish(postId: String): Post
    signupUser(email: String!, name: String): User
  }
`;

export default typeDefs;
