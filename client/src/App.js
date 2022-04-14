import './App.css';
import Header from './components/Header';
import ListPeople from './components/ListPeople'
import { useEffect, useState } from 'react';
import Login from './components/Login';

  function App() {
  const [peoples, setPeoples] = useState([]);
  const [auth, setAuth] = useState(
    JSON.parse(localStorage.getItem('user'))?.status === true ?
    JSON.parse(localStorage.getItem('user')) :
    {status: false});


  const checkUpdatePeoples = async () => {
    const response = await fetch('/api/people/getPeople')
    const responsePeople = await response.json()
    
    setPeoples(responsePeople.sort((a,b) => a.id - b.id))
  }

  useEffect(() => {
    checkUpdatePeoples();
  }, [])

  return (
    <div className="App">
      {
        !auth.status && <Login setAuth={setAuth} />
      }
      {auth.status &&
      <>
        <Header checkUpdatePeoples={checkUpdatePeoples} />
        <ListPeople peoples={peoples} checkUpdatePeoples={checkUpdatePeoples} />
      </>
      }

    </div>
  );
}

export default App;

