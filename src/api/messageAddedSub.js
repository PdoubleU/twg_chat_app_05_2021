import { useSubscription, gql } from "@apollo/client";

const messageAddedSub = gql`
  subscription messageAdded($roomId: String!) {
    messageAdded(roomId: $roomId) {
      body
    }
  }
`;

export default function messageAdded(id) {
  const { newMessage } = useSubscription(messageAddedSub, {
    variables: { id },
  });

  return { newMessage };
}
