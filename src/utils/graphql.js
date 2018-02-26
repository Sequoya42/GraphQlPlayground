import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import env from '../../.env';

const httpLink = createHttpLink({ uri: "https://api.github.com/graphql" });
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      Authorization: `bearer ${env.key}`
    }
  });
  return forward(operation);
});

const link = middlewareLink.concat(httpLink);

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
})