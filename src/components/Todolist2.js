import { useState } from 'react'

function Todolist2() {
    const [inputValue, setInputValue] = useState('')
    const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem('Jobs2')) ?? [])
    const handleAdd = () => {
        setJobs(p => {
            const newJobs = [...p, inputValue]
            localStorage.setItem('Jobs2', JSON.stringify(newJobs))
            return newJobs;
        })
        setInputValue('')
    }
    const handleDelete = (item) => {
        setJobs(prevJobs => {
            const index = prevJobs.indexOf(item);

            // Tạo một bản sao của mảng jobs, loại bỏ phần tử tại chỉ số index
            const newJobs = prevJobs.filter((item, index2) => index2 !== index);

            // Lưu mảng jobs đã cập nhật vào localStorage
            localStorage.setItem('Jobs2', JSON.stringify(newJobs));

            // Trả về mảng jobs đã cập nhật để cập nhật state
            return newJobs;
        })
    }
    console.log(jobs)
    return (
        <div>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={handleAdd}>Add</button>
            </div>
            <div>
                <ol>
                    {jobs.map((item, index) => {

                        return (
                            <li key={index}>{item}<button class={item} onClick={() => handleDelete(item)}>x</button></li>
                        )
                    })}
                </ol>
            </div>
        </div>

    )
}

export default Todolist2