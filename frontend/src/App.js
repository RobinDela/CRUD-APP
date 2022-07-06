import Header from './components/Header.jsx'
import Crews from './components/Crews.jsx';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import AddCrewModal from './components/AddCrewModal.jsx';

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
          <div className='container'>
            <AddCrewModal />
            <Crews />
          </div>
          ABCDEF
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
