import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { API_TOKEN } from "@env";
import { WebSocketLink } from "@apollo/client/link/ws";

const wsLink = new WebSocketLink({
  uri: "wss://chat.thewidlarzgroup.com/socket",
  options: {
    reconnect: true,
    connectionParams: {
      authToken: API_TOKEN,
    },
  },
});

export const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${API_TOKEN}`,
    },
  };
});

export const httpLink = createHttpLink({
  uri: "https://chat.thewidlarzgroup.com/api/graphiql",
});

export let splitLink = split(
  ({ query }) => {
    const kind = query.definitions[0].kind;
    const operation = query.definitions[0].operation;
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

console.log(splitLink);

export const apolloClient = new ApolloClient({
  link: authLink.concat(splitLink),
  cache: new InMemoryCache(),
});
