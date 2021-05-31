import { gql, useMutation } from "@apollo/client";

export const addMessage = gql`
  mutation sendMessage($body: String!, $roomId: String!) {
    sendMessage(roomId: $roomId, body: $body) {
      body
    }
  }
`;

export default function AddMsg() {
  const [addMsg] = useMutation(addMessage);
  return { addMsg };
}
