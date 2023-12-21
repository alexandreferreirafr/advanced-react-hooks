// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

// 🐨 create your CountContext here with React.createContext
const CounterContext = React.createContext()
// 🐨 create a CountProvider component here that does this:

function CounterProvider({children}) {
  //   🐨 get the count state and setCount updater with React.useState
  //   🐨 create a `value` array with count and setCount
  const value = React.useState(0)

  //   🐨 return your context provider with the value assigned to that array and forward all the other props
  //   💰 more specifically, we need the children prop forwarded to the context provider
  return (
    <CounterContext.Provider value={value}>
      {children}
    </CounterContext.Provider>
  )
}

function useCounter() {
  const ctx = React.useContext(CounterContext)

  if (!ctx) {
    throw new Error('useCount must be used inside of a <CounterProvider />')
  }

  return ctx;
}

function CountDisplay() {
  // 🐨 get the count from useContext with the CountContext
  const [count] = useCounter()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  // 🐨 get the setCount from useContext with the CountContext
  const [, setCount] = useCounter()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      {/*
        🐨 wrap these two components in the CountProvider so they can access
        the CountContext value
      */}
      <CounterProvider>
        <CountDisplay />
        <Counter />
      </CounterProvider>
    </div>
  )
}

export default App
