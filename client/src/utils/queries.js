import { gql } from "@apollo/client";

export const QUERY_ME = gql`
  query me {
    _id
    createdAt
    email
    habits {
      _id
      title
    }
    admin
  }
`;
