import { useState, useEffect } from "react";


function useFetch() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [url, setUrl] = useState('')
    const [config, setConfig] = useState({})
    useEffect(() => {
        const fetchData = async () => {
            if (!url) return
            try {
                setLoading(true)
                const response = await fetch(url, config)
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

        fetchData()
    }, [url])

    return { data, loading, error, setUrl, setConfig }

}

export default useFetch