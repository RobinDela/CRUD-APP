import Header from './components/Header.jsx'
import Crews from './components/Crews.jsx';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <div>
          <Header />
          <Crews />
          ABCDEF
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
