import './App.css';
import Header from './components/Header';
import ListPeople from './components/ListPeople'
import { useEffect, useState } from 'react';
import Login from './components/Login';

  function App() {
  const [peoples, setPeoples] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'))
  const [auth, setAuth] = useState(user?.status === true ? user : {status: false});


  const checkUpdatePeoples = async () => {
    const response = await fetch('/api/people/getPeople')
    const responsePeople = await response.json()
    
    setPeoples(responsePeople.sort((a,b) => a.id - b.id))
  }

  useEffect(() => {
    if (auth.status) {
      checkUpdatePeoples();
    }
  }, [auth])

  return (
    <div className="App">
      {
        !auth.status && <Login setAuth={setAuth} />
      }
      {auth.status &&
      <>
        <Header checkUpdatePeoples={checkUpdatePeoples} setAuth={setAuth}/>
        <ListPeople peoples={peoples} checkUpdatePeoples={checkUpdatePeoples} />
      </>
      }

    </div>
  );
}

export default App;

