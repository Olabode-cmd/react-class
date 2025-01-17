import Navbar from "../components/navbar/navbar";
import { useState } from "react";

const Index = () => {
  const [role, setRole] = useState("admin");
  const [greeting, setGreeting] = useState("");

  const [name, setName] = useState('');
  setName('John')

  // Switch statements
  function RoleGreeting() {
    let message;
    switch (role) {
      case "admin":
        message = "Welcome, Admin.";
        break;

      case "user":
        message = "Welcome dear user";
        break;

      case "guest":
        message = "Hi dear guest. Please create an account";
        break;

      default:
        message = "Hello!";
    }
    setGreeting(message);
  }
  // function checkTemperature() {
  //   let temperature = prompt("Enter temperature: ");

  //   if (temperature < 25) {
  //     alert("Weather is cold");
  //   } else if (temperature < 39 && temperature >= 25) {
  //     alert("Weather is moderate");
  //   } else if (temperature > 39) {
  //     alert("Weather is hot");
  //   } else {
  //     alert("Enter a valid temperature");
  //   }
  // }

  return (
    <div>
      <Navbar />

      <h1>Role-based Greeting</h1>
      <h1>Current role: {role}</h1>

      <button onClick={() => setRole("admin")}>Set to Admin</button>
      <button onClick={() => setRole("user")}>Set to User</button>
      <button onClick={() => setRole("guest")}>Set to Guest</button>

      <button onClick={RoleGreeting}>Get greeting</button>

      <h2>{greeting}</h2>
    </div>
  );
};

export default Index;
