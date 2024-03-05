import { useState } from "react"
import { useLogin } from "../hooks/useLogin"

const Login = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    const d = await login(id, password)
    return (
      <h1>{d}</h1>
    )
  }

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h3>Login</h3>
      
      <label>Id:</label>
      <input 
        type="text" 
        onChange={(e) => setId(e.target.value)} 
        value={id} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
      />
      <button disabled = {isLoading} >Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login