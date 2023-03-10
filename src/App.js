import { useState, useEffect } from "react";
import "./App.css";
import UserWrapper from "./components/userWrapper/UserWrapper";
import { getAllUsers, authCheck } from "./utils";
import { getTokenFromCookie } from "./components/common";

function App() {
  const [user, setUser] = useState({
    username: null,
    email: null,
    token: null,
  });

  const [users, setUsers] = useState();




  useEffect(() => {
    if (document.cookie) {
      let token = getTokenFromCookie("jwt_token")

      if (token === false) {
        setUser({
          username: null,
          email: null,
          token: null,
        });
      } else {
        loginWithToken(token);
      }
    }
  }, []);






  const logOut = (e) => {
    e.preventDefault()
    setUser({
      username: null,
      email: null,
      token: null,
    });

    setUsers(null)

    document.cookie =
      "jwt_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }



  const loginWithToken = async (token) => {
    const persistantUser = await authCheck(token);

    await setUser(persistantUser);
  }







  const submitHandler = async (e) => {
    e.preventDefault();
    setUsers(await getAllUsers())
  };

  return (
    <div className="app-wrapper">
      <h2>Hello World</h2>
      <UserWrapper user={user} setUser={setUser} />

      <>{user.token ? (
        <p>{user.username} is Logged in</p>
      ) : (
        <p>Not Logged in</p>
      )}
      </>
      <form onSubmit={(e) => submitHandler(e)}>
        <button type="submit" >Get all Users</button>
      </form>
      {users
        ? users.map((user, index) => <p key={user.id}>{user.username}</p>)
        : null}
      <button onClick={(e) => logOut(e)}>Logout</button>
    </div>
  );
}


export default App;