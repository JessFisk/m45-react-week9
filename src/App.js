import {useState} from "react";
import "./App.css";
import UserWrapper from "./components/userWrapper/UserWrapper";


function App() {
  const [user, setUser] = useState({
    username: null,
    email: null,
    token: null,
  });
  return (
    <div className= "app-wrapper">
      <h2>Hello World</h2>
      <UserWrapper user = {user} setUser={setUser}/>
    
    <>{user.token ? (
    <p>{user.username} is Logged in</p> ) : ( <p>Not Logged in</p>)}</>
    </div>

  );
}

export default App;
