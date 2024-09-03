
import { useState } from 'react'

function Todolist() {
    const jobList = JSON.parse(localStorage.getItem('job'))
    const [inp, setInp] = useState('')
    const [job, setJob] = useState(jobList ?? [])
    const [notification, setNotification] = useState('')
    const handleClickAdd = () => {

        setJob(p => {
            const newJob = [...p, inp]
            return newJob
        })
        setNotification('Thêm thành công!')
        setInp('')

    }
    let arrayWithoutH = []
    const listJob = JSON.stringify(job)
    localStorage.setItem('job', listJob)
    const handleDelete = (e) => {
        
        const index = inp;
        for (let i = 0; i < job.length; i++) {
            if(i === index && job.length === 1) {
                arrayWithoutH = []
                setNotification(`Xoá id: ${index} thành công!`)
            }
            else if (i != index) {
                if (index >=0 || index <0) {
                    arrayWithoutH.push(job[i])
                    setNotification(`Xoá id: ${index} thành công!`)
                }else {
                    arrayWithoutH = job
                    console.log('ha')
                    setNotification(`id: ${index} không tồn tại!`)
                }
            }
            setInp('')
            setJob(arrayWithoutH)
        }
    }
return (
    <div style={{ margin: '20px 0 0 20px' }}>
        <div>
            <input placeholder='Nhập việc cần thêm hoặc nhập id cần xoá' value={inp} onChange={(e) => setInp(e.target.value)} />
            <button onClick={handleClickAdd}>Add</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
        <p>{notification}</p>
        <ul>
            {job.map((item, index) => {
                return (
                    
                        
                        <li style={{ listStyle: 'none' }} key={index}>{index}:{item}</li>
                    
                )
            })}
        </ul>
    </div>
)
}

export default Todolist;