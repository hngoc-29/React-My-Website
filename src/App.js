import { useState } from 'react'
function App() {
    const coursts = ['JavaScript', 'PHP', 'Java']
    
    const [value, setValue] = useState([]);
    console.log(value)
    const handleChange = (e) => {
        if(e.checked === true){
            setValue([...value, e.className])
            
        }else {
            console.log('lọt')
        }
        
    }
    
  return (
    <div className="App">
      
      <input className='JavaScript' onChange={e=>{handleChange(e.target)}} type='checkbox' />
      <label>{coursts[0]}</label>
      <input className='PHP' onChange={e=>{handleChange(e.target)}} type='checkbox' />
      <label>{coursts[1]}</label>
      <input  className='Java' onChange={e=>{handleChange(e.target)}} type='checkbox' />
      <label>{coursts[2]}</label>
    </div>
  );
}

export default App;
