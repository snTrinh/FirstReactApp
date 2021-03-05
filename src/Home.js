const Home = () => {

    const handleClick = (e) =>{
        console.log('hello fren', e);
    }
    // creating a function that takes in a parameter
    const handleClickAgain = (name, e) =>{
        console.log('hello ' + name, e.target);
    }

    return ( 
        <div className="Home">
        <h2>Homepage</h2>
        <button onClick={handleClick}>Click Me</button>
        {/* wrap the following code within an anonymous function */}
        <button onClick={(e) => handleClickAgain('Susan', e)}>Click Me Again</button>
        </div>
     );
}
 //scf 
export default Home;

