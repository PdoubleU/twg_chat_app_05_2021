import { useQuery, gql } from "@apollo/client";

const typingSub = gql`
  subscription typingUser($roomId: String!) {
    typingUser(roomId: $roomId) {
      firstName
      email
      id
    }
  }
`;

export default function roomsData() {
  const { loading, error, data } = useQuery(roomsQuery);
  return { loading, error, data };
}
