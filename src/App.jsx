import Navbar from './components/navbar/navbar'

function App() {

  function handleClick (){
    alert("Button Clicked")
  };

  // If Statements
  function checkForAge() {
    let age = prompt("Enter your age");

    
    if (age >= 18) {
      alert("You are an adult");
    } else {
      alert("You are a minor");
    } 
  }

  let userLoggedIn = true

  return (
    <>
      <Navbar />

      {/* Event Handlers */}
      <div className="container">
        <button onClick={() => console.log("Button Clicked")}>Click Me</button>
        <button onClick={handleClick}>Click Me For An Alert</button>

        <button onClick={checkForAge}>Check for age</button>

        <button>{userLoggedIn ? "Welcome Ola" : "Login to your account"}</button>
      </div>
    </>
  )
}

export default App
