import { useState } from 'react';

const ToDo = ({ initialTask }) => {
  const [tasks, setTasks] = useState(initialTask);
  const [taskInput, setTaskInput] = useState(""); 
  const [priorityInput, setPriorityInput] = useState("Basse"); 
  const [searchQuery, setSearchQuery] = useState("");

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleTerminate = (index) => {
    const updatedTasks = tasks.map((task, i) => {
      if (i === index) {
        const isCompleted = !task.isCompleted;
        return {
          ...task,
          isCompleted,
          color: isCompleted ? "#99ff99" : ""
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (taskInput !== "") {
      setTasks([
        ...tasks,
        {
          task: taskInput,
          priority: priorityInput,
          isCompleted: false,
          color: ""
        }
      ]);
      setTaskInput(""); 
      setPriorityInput("Basse"); 
    }
  };
  const filteredTasks = tasks.filter((task) =>
    task.task.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <ul>
        {filteredTasks.map((item, index) => (
          <li key={index} style={{ backgroundColor: item.color }}>
            {item.task} : {item.priority}
            <button onClick={() => handleTerminate(index)}>
              {item.isCompleted ? "Non Terminer" : "Terminer"}
            </button>
            <button onClick={() => handleDelete(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
      <h3>Total des taches : {tasks.length}</h3>
      <h4>Total des taches terminées : {tasks.filter(task => task.isCompleted).length}</h4>

      <input
        type='text'
        placeholder='Ajouter une tache'
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)} 
      />

      <select
        name='Priorité'
        value={priorityInput}
        onChange={(e) => setPriorityInput(e.target.value)} 
      >
        <option value="Haute">Haute</option>
        <option value="Moyenne">Moyenne</option>
        <option value="Basse">Basse</option>
      </select>

      <button onClick={handleAddTask}>Ajouter une tache</button>
      <input
        type="text"
        placeholder="Rechercher une tache"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
    </>
  );
};

export default ToDo;
