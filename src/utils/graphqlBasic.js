import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import env from '../../.env';


export default new ApolloClient({
  // Provide the URL to the API server.
  link: new HttpLink({ uri: 'https://api.github.com/graphql' }),
  // Using a cache for blazingly
  // fast subsequent queries.
  cache: new InMemoryCache(),
});