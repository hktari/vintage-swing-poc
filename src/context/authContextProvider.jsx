import React from "react"
import { createContext, useContext, useState } from "react"

export const AuthContext = createContext()

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const defaultUser = {
    imgSrc:
      "https://images.unsplash.com/photo-1624298357597-fd92dfbec01d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D",
    name: "Janez",
    level: "LH2",
  }
  const login = () => {
    setUser(defaultUser)
  }
  const isLoggedIn = () => user !== null

  const value = { user, setUser, login, isLoggedIn }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

export default AuthContextProvider
