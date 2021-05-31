import { useSubscription, gql } from "@apollo/client";

const typingSub = gql`
  subscription typingUser($roomId: String!) {
    typingUser(roomId: $roomId) {
      firstName
    }
  }
`;

export default function userIsTyping(id) {
  const { data } = useSubscription(typingSub, { variables: { id } });
  return { data };
}
