import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Test() {

  let [count, setCount] = useState(0);

  useEffect(() => {
console.log("UseEffrct")
  },[])


  return (
    <div>
      <button onClick={() => { setCount(++count) }}>add</button>
      <button onClick={() => { setCount(--count) }}>sub</button>

      <h2>{count}</h2>
    </div>
  )
}

export default Test