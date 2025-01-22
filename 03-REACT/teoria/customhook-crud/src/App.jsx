import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const {data, error, loading, setConfig, setUrl} = useFetch()

  const listPosts =()=>{
    setUrl("https://jsonplaceholder.typicode.com/posts?userId=1")
    setConfig({method: 'GET'})
  }

  const createPost =()=>{
    setUrl("https://jsonplaceholder.typicode.com/posts")
    setConfig({
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      method: "POST",
      body: JSON.stringify({
        title: 'Mi primer post',
        body: 'hola',
        userId: 1,
      })
    })
  }


  if(loading  ) return <h1>Loading...</h1>
  if(error ) return <h1>Error en la peticion de los personajes</h1>
  return (
    <>
        <button onClick={()=> listPosts()}>Cargar posts</button>
        <button onClick={()=> createPost()}>Crear un post por defecto</button>
      <div className="card">
        {console.log('DATA', data)}
      {data.length ?
        data?.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        )) : <div key={data.id}>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
      }
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
