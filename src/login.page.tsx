import React from "react";

export const LoginPage: React.FC = () => {
  const [userName, setUserName] = React.useState('')
  const [password, setPassword] = React.useState('')
  return (
    <>
      <h1>Login</h1>
      <label htmlFor="userName">Name:</label>
      <input type="text" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Please, insert your name" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Please, insert your password"/>
      <button>Enter</button>
      
       </>
  )
}