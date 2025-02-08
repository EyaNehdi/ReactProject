import {useState} from 'react';
const ColorBox = ({initialColor}) =>{
    const [color, setColor] = useState(initialColor);
    const handleClick = () => {
        const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        setColor(randomColor);

    }
return (
    <>
    <div style={{display: 'flex', marginLeft:'200px'}} >
    <div  style={{width: '100px', height: '100px', backgroundColor: color}}></div>
    </div>
    <button
    onClick={handleClick}>Change Color</button>
    </>
);
}
export default ColorBox;