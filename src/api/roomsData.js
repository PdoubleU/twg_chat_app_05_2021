import { useQuery, gql } from "@apollo/client";

const roomsQuery = gql`
  {
    usersRooms {
      rooms {
        id
        name
      }
    }
  }
`;

export default function roomsData() {
  const { loading, error, data } = useQuery(roomsQuery);
  return { loading, error, data };
}
