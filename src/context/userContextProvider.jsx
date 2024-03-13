import React from "react"
import { createContext, useContext, useState } from "react"

const userContext = createContext({ user: null, setUser: null })

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const value = { user, setUser }

  return <userContext.Provider value={value}>{children}</userContext.Provider>
}

export const useUser = () => useContext(userContext)

export default UserContextProvider
