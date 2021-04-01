import React from 'react';
//import './App.css';

import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
function App() {
    
  //while fetching for jobs the app too will be loading and in case there
  // may be any an error so  
  const {jobs,loading,error} = useFetchJobs();

  return (

    <Container>

      {loading && <h1>LOADING ......</h1>}
      { error && <h1> ERROR OCCURED.... TRY AGAIN  :)</h1>}
      <h1>{jobs.length}</h1>

    </Container>
    /*
    <div className="App">
      <header className="App-header">
          <h1>Hello world!!</h1>  
      </header>
    </div>*/
  );
}

export default App;
