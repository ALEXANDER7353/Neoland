import { useState, useEffect } from 'react'

function useFetch(url) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const response = await fetch(url)
                const data = await response.json()
                if (data.error) {
                    setError(true)
                }
                setData(data)
                setLoading(false)
            } catch (error) {
                console.log("🚀 ~ fetchData ~ error:", error)
                setError(true)
            }
        }
        url && fetchData()
    }, [url])

    return { data, loading, error }

}

export default useFetch