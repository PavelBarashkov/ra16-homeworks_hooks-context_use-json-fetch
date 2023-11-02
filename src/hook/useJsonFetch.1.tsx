import { useEffect, useState } from "react";


export const useJsonFetch = (url: string, opts: string) => {
    const [data, setData] = useState();
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            try {
                const response = await fetch(url, { method: opts });
                if (response.status !== 200) {
                    setError(response.statusText);
                }
                const newData = await response.json();
                setData(newData);
            } catch (e) {
                console.log(e)
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    return [data, loading, error];
};
