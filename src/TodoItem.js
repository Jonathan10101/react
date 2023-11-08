import './TodoItem.css'

function TodoItem({name}){    
    return (
        <li className="TodoItem">
            <span>V</span>
            <p>{name}</p>
            <span>x</span>
        </li>
    );      
}


export {TodoItem};