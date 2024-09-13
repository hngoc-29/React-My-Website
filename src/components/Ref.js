import { useState, useRef, useEffect } from 'react'

//useRef dùng để lưu các giá trị bên ngoài function component
//khi function component được re-render thì giá trị được dùng useRef không bị set lại

function Ref() {
    const [count, setCount] = useState(0)
    const count2 = useRef()//giá trị mặc định sẽ ko được đặt lại khi component re-render
    //useRef có thể truyền vào một thẻ html để lấy nó tương tự như querySelector
    const tagH2 = useRef()
    console.log(tagH2)
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
            count2.current = count
        }, 1000)
    }, [count])

return (
    <>
        <h2 ref={tagH2}>Giá trị hiện tại: {count}</h2>
        <h2>Giá trị trước đó: {count2.current}</h2>
    </>
)
}

export default Ref;
