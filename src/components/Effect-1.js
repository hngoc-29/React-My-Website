import { useState, useEffect } from 'react'

function Effect() {
    const [title, setTitle] = useState('')
    const [page, setPage] = useState('posts')
    const pages = ['posts', 'comments', 'albums', 'photos', 'todos']
    const [data, setData] = useState([])
    //chung: callBack sẽ được gọi khi component được mounted
    useEffect(() => {
        document.title = title
    })//callBack sẽ được gọi khi re-render
    /*useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${page}`)
            .then((respone) => respone.json())
            .then((data) => setData(data))
    }, [])//callBack sẽ không được gọi lại*/
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${page}`)
          .then((respone)=>respone.json())
          .then((data)=>setData(data))
    },[page])//callBack sẽ được gọi khi page thay đổi
    return(
        <div>
            <input style={{width: '100%', marginTop: '20px'}}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              />
                {pages.map((item, index)=>{
                    return(
                        <button style={page===item?{color: '#fff', backgroundColor: '#333'}:{}} onClick={() => setPage(item)} key={index}>{item}</button>
                    )
                })}
                <div>
                    {data.map((item) => {
                        return(
                            <p key={item.id}>{item.title}||{item.name}</p>
                        )
                    })}
                </div>
        </div>
    )
}
export default Effect