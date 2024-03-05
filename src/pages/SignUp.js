import { useState } from "react"
import { useSignup } from "../hooks/useSignup"

const Signup = () => {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(id,password,role)
  }

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      
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
      <label>Role:</label>
      <input 
        type="text" 
        onChange={(e) => setRole(e.target.value)} 
        value={role} 
      />

      <button disabled = {isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Signup