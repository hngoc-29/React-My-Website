
import { useState } from 'react'

function Todolist() {
    const jopList = JSON.parse(localStorage.getItem('jop'))
    const [inp, setInp] = useState('')
    const [jop, setJop] = useState(jopList ?? [])
    const handleClickAdd = () => {
        
        setJop( p => [...p, inp])
    
        setInp('')
        
    }
    const listJop = JSON.stringify(jop)
    localStorage.setItem('jop', listJop)
    return(
        <div style={{margin: '20px 0 0 40px'}}>
            <div>
                <input value={inp} onChange={(e)=>setInp(e.target.value)} />
                <button onClick={handleClickAdd}>Add</button>
            </div>
            <ul>
                {jop.map((item, index) => {
                    return(
                        <li key={index}>{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Todolist;