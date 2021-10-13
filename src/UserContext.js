import React, { createContext, useEffect, useState } from 'react'

export const UserContext = createContext()

export const UserStorage = ({ children }) => {
  const [hasListReports, setHasListReports] = useState(false)
  const [amount, setAmount] = useState(0)
  const [listReportsStorage, setListReportsStorage] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('ListReports')) {
      const result = JSON.parse(localStorage.getItem('ListReports'))
      setHasListReports(true)
      setAmount(result.length)
      setListReportsStorage(result)
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        hasListReports,
        setHasListReports,
        setAmount,
        amount,
        listReportsStorage,
        setListReportsStorage,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
