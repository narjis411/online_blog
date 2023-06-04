const Home = () => {

    const handleClick = (e) => {
        console.log('Hello, Ninjas', e);
    }
    
    const handleClickAgain = (name) => {
        console.log('hello ' + name);
    }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Mario', e)}>Click me again</button>
        </div>
     );
}
 
export default Home;