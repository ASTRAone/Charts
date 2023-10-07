import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  concat,
} from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://graphql-demo.dev.aicall.ru/graphql",
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: localStorage.getItem("token") || null,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

export default client;
