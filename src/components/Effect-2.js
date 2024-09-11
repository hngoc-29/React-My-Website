
import { useState, useEffect } from 'react'

const Effect2 = () => {
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [comments, setComments] = useState([])
    const [count, setCount] = useState(0)
    useEffect(() => {
        //đếm
        const countUp = setTimeout(() => {
            setCount(count+1)
        }, 1000);
        //clear timeout khi unmounted
        return () => clearTimeout(countUp)
    },[count])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(res => res.json())
            .then(data => setComments(data))
            .catch(() => setComments(['error call API']))
        const handleScroll = () => {
            
            
            // Nếu người dùng cuộn xuống hơn 300px thì hiển thị nút
            if (window.scrollY > 300) {
                setShowGoToTop(true);
            } else {
                setShowGoToTop(false);
            }
        };
        //thêm sự kiện scroll
        console.log('addEvent');
        
        window.addEventListener('scroll', handleScroll)












//clean function
//sẽ được thực thi trước khi element unmounted
return () => {
console.log('removeEvent')
    //delete event scroll để khi element bị unmounted và được mounted lại không bị lỗi!
    window.removeEventListener('scroll', handleScroll)
}
    }, [])



    const handleGoTop = () => {
        window.scrollTo({top: 0,behavior: "smooth"})
    }
  
    return (
        <div>
        <h2>{count}</h2>
            <p>{showGoToTop}</p>
            <ol>
                {comments.map(item => <li key={item.id}>{item.name}</li>)}

            </ol>
            <div>
                {
                    showGoToTop && (<button
                      onClick={handleGoTop} 
                       

                    >Go Top</button>)
                }
            </div>
        </div>
    )
}

export default Effect2;