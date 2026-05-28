import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  const register = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    let exist = users.some((user) => user.email === email);
    if (exist) {
      return;
    }else{
      setUsers((prevUsers) => [...prevUsers, { email, password }]);
    }
  };

  console.log(users);

  return (
    <>
      <div>
        <form onSubmit={register}>
          <input type="email" placeholder="Enter the email..." name="email" />
          <input
            type="password"
            placeholder="Enter the password..."
            name="password"
          />
          <button>Register</button>
        </form>
        {users.map((user) => {
          return (
            <div>
              <p>{user.email}</p>
              <p>{user.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
