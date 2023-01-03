import { useEffect, useState } from "react"
import { User } from "./User.types"
import axios from "axios";

function Users() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetchUsers()
  },[])   

  function fetchUsers() {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => setError("Error occured"))
  }  

  return (
    <div>
        <h2>Users</h2>
        {error && <p role="alert">{error}</p>}
        <ul>
            {users.map((user) => (<li>{user.name}</li>))}
        </ul>
    </div>
  )
}

export default Users