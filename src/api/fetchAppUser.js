import { useQuery, useLazyQuery, gql } from "@apollo/client";

const query = gql`
  {
    user {
      email
      firstName
      id
      lastName
      profilePic
      role
    }
  }
`;

export default function fetchAppUser() {
  const [loadUser, { loading, error, appUser }] = useLazyQuery(query);
  return { loadUser, appUser };
}
