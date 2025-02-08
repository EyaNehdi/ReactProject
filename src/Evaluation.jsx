import  { useState } from 'react';
const Evaluation = ({initialNotes}) => {
    const [notes, setNotes] = useState(initialNotes);
    const [newNote, setNewNote] = useState('');

    const handleDelete = (index) => {
        setNotes(notes.filter((_, i) => i !== index));
    };
    
        const calculerMoyenne = () => {
            if (notes.length === 0) return 0; 
            const total = notes.reduce((acc, note) => acc + note, 0);
            return (total / notes.length).toFixed(2); 
        };
    
    return (
        <div>
            <h1>Evaluation</h1>
            <ul>
            {notes.map((item, index) => (
          <li key={index}>{item}
          <button
          onClick={()=>handleDelete(index)}>Supprimer</button></li>
        ))}
            </ul>
            <input
            type='number'
        value={newNote}
        placeholder='Ajouter une note'
        onChange={e => setNewNote(e.target.value)}
      />
      <button onClick={() => {
        if(newNote !== "" && newNote >= 0 && newNote <= 20){
       setNotes([...notes, newNote]);
       setNewNote("");}
      }}>Ajouter</button>
      <p>La moyenne des notes est : {calculerMoyenne()}</p>
        </div>
    );
}
export default Evaluation;