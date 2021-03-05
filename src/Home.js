import {useState} from 'react';

const Home = () => {
    const [name, setName] = useState('Susan');
    const handleClick = () =>{
        setName('Trinh');
    }
    // creating a function that takes in a parameter
    // adding the event argument e, e.target will give you the object that fires the event
    const handleClickAgain = (name, e) =>{
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="Home">
        <h2>Homepage</h2>
        <p>{name}</p>
        <button onClick={handleClick}>Click Me</button>
        {/* wrap the following code within an anonymous function */}
        <button onClick={(e) => handleClickAgain('Susan', e)}>Click Me Again</button>
        </div>
     );
}
 //scf 
export default Home;

