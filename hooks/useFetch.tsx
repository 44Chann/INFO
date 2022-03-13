import { useEffect, useState } from "react"



export default function useFetch(url: string) {

    const [data, setData] = useState<any>(null)
    const [error, setError] = useState<any>(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        (
            async function () {
                try {
                    setLoading(true)
                    const response = await fetch(url)
                    const data = await response.json()
                    setData(data.articles)
                    console.log(data.articles)

                } catch (err) {
                    setError(err)
                } finally {
                    setLoading(false)
                }
            }
        )()
    }, [url])

    return { data, error, loading, setLoading }

}