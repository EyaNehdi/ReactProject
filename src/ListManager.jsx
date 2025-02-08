import { useState } from "react";
const ListManager = ({initialItems = [], placeholder='Add an item'}) =>{

    const [item, setItem] = useState('');
    const [list, setList] = useState(initialItems);
    
    
    const handleDelete = (index) => {
        setList(list.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Liste :</h1>
            <ul>
            {list.map((item, index) => (
          <li key={index}>{item}
          <button
          onClick={()=>handleDelete(index)}>Supprimer</button></li>
        ))}
            </ul>
            <input
        value={item}
        placeholder={placeholder}
        onChange={e => setItem(e.target.value)}
      />
      <button onClick={() => {
        if(item !== ""){
       setList([...list, item]);
       setItem("");}
      }}>Ajouter</button>
        </div>
    );
}
export default ListManager;