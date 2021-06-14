import { useEffect, useState } from 'react';
import { AccountContext } from '../context/auth.context';
import { Chore, Trainer } from '../model/model';

import { createTask, readAllChores } from '../service/pokemonService';
import './AdminHomepage.css';
import CalendarCard from './CalendarCard';
import TaskForm from './TaskForm';
import { useContext } from "react";

function AdminHomepage(){
    const [ chores, setChores ] = useState<Chore[]>([]);
    const [ choresLoaded, setChoresLoaded ] = useState(false);
    const {accounts} = useContext(AccountContext);
    const [ showForm, setShowForm] = useState(false);
    
    useEffect(()=>{
      loadChores();
    }, []);
    
    function loadChores(){
      readAllChores().then(choresFromApi => {
        setChores(choresFromApi);
        setChoresLoaded(true);
      });
    }
    
    function handleShowForm(){
      setShowForm(true);
    }
    function handleAddTask(chore:Chore):void{
      createTask(chore).then(loadChores)
    }

  const [ trainer, setTrainer ] = useState<Trainer[]>([]);

  function handleAddTrainer(trainer: Trainer): void {
    setTrainer(prevTrainer => [ ...prevTrainer, trainer ]);
  }

  return (
    <div className="AdminHomepage">
      <h3> HOMEPAGE</h3>
      <button>add trainer</button>
      <button onClick={handleShowForm}>Create a Task</button>
      { !choresLoaded ?
            <p className="AdminHomePage_message">Loading...</p>
            : chores.map(eachChore => 
            <CalendarCard key={eachChore._id} chore={eachChore}/>
            )}
      {showForm === true && <TaskForm onSubmit={handleAddTask} onClose={()=> setShowForm(false)}/>}
    </div>
  );

}

export default AdminHomepage;