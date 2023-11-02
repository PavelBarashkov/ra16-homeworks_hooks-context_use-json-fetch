import './App.css'
import { useJsonFetch } from "./hook/useJsonFetch.1";

function App() {
    const [data, loading, error] = useJsonFetch('http://localhost:7070/data', 'GET');

  return (
    <>
        {loading && <p>Загрузка</p>}
        {!loading && error && (
            <div>{error}</div>

        )}
        {!loading && !error && ( 
            <div>
                {data}
            </div>
        )}
        
    </>
  )
}

export default App
