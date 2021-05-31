import { useSubscription, gql } from "@apollo/client";

const messageAddedSub = gql`
  subscription messageAdded($roomId: String!) {
    messageAdded(roomId: $roomId) {
      body
    }
  }
`;

export default function messageAdded(id) {
  const { newMessage, loading, error } = useSubscription(messageAddedSub, {
    variables: { id },
  });
  console.log(newMessage, loading, error);

  return { newMessage, loading, error };
}
