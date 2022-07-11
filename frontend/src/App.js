import Header from './components/Header.jsx'
import Crews from './components/Crews.jsx';
import AddCrewModal from './components/AddCrewModal.jsx';
import { GET_CREWS } from './Queries/GetAllCrewsQueries.jsx';
import { useQuery } from '@apollo/client';




const App = () => {

  const { loading, error, data } = useQuery(GET_CREWS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>ERROR couldn't load data</p>
  return (
    <>
      <div className="header-content">
        <Header data={data} />
        <AddCrewModal />
      </div>
      <Crews data={data} />


    </>
  );
}

export default App;
