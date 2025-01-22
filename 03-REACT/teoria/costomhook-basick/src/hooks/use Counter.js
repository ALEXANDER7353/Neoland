import { useState } from 'react'

function useCounter(initValue = 0) {
    const [count, setCount] = useState(initValue)

    const increment = () => setCount(count + 1)
    const decrement = () => setCount(count - 1)

    return { increment, decrement, count }
}

export default useCounter