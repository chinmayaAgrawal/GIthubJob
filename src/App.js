import React,{useState} from 'react';
//import './App.css';

import useFetchJobs from './useFetchJobs';
import { Container } from 'react-bootstrap';
import Job from './Job'
function App() {
    
  
  const [params, setParams]= useState({})
  //inital state to be for page 1
  const [page,setPage] =useState(1)

  //while fetching for jobs the app too will be loading and in case there
  // may be any an error so  
  const {jobs,loading,error} = useFetchJobs();

  return (

    <Container>

      {loading && <h1>LOADING ......</h1>}
      { error && <h1> ERROR OCCURED.... TRY AGAIN  :)</h1>}
      {//<h1>{jobs.length}</h1>} //for displaying jobs as in res 
}
       {jobs.map(job => {
         return <Job key={job.id} job={job}/>
       })}

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
