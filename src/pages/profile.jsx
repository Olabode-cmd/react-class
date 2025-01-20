import { useState } from 'react';
import Card from '../components/card'

const Profile=()=>{
 const users = [
   {
     id: 1,
     name: "John Doe",
     email: "johndoe@gmail.com",
     age: 20,
   },
   {
     id: 2,
     name: "Mary Doe",
     email: "marydoe@gmail.com",
     age: 22,
   },
   {
     id: 3,
     name: "Matt Doe",
     email: "mattdoe@gmail.com",
     age: 20,
   },
 ];
    return (
      <>
        <h1>About</h1>
        <h1>User List</h1>

        <div>
          {/* {users.map((user) => (
            <div key={user.id}>
              <h2>Name: {user.name}</h2>
              <h2>Email: {user.email}</h2>
              <h2>Age: {user.age}</h2>
            </div>
          ))} */}
        </div>

        <div>
          {users.map((user) => (
            <Card 
                name={user.name} 
                email={user.email} 
                age={user.age} 
            /> 
          ))}
        </div>

        {/* <Card name="John Doe" email="johnthedoe@gmail.com" age={14} /> */}
      </>  
    );
}



export default Profile;