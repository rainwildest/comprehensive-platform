import { graphql } from "generated/gql";

export default graphql(/* GraphQL */ `
  fragment UserItem on User {
    id
    name
    email
    password
    telphone
  }
`);
