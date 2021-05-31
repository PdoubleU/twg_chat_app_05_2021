import { useQuery, useLazyQuery, gql } from "@apollo/client";

const query = gql`
  query room($id: String!) {
    room(id: $id) {
      messages {
        body
        id
        insertedAt
        user {
          id
          firstName
          profilePic
        }
      }
    }
  }
`;

export default function roomData(id) {
  const { loading, error, data } = useQuery(query, { variables: { id } });
  return { loading, error, data };
}
