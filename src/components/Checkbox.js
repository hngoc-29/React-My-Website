import { useState } from 'react'
function Checkbox() {
    const coursts = [
      {
        id: 1,
        name: 'HTML'
      },
      {
        id: 2,
        name: 'Javascript'
      },
      {
        id: 3,
        name: 'Css'
      }
    ]
    //console.log(checked)
    const [checked, setChecked] = useState([])
    function changeChecked(id) {
      if(!checked.includes(id)){
        setChecked([...checked, id])
      }else {
        let idArray = checked.filter(item => {
          
 
          return item !== id
        })
        setChecked(idArray)
        

      }
    }

  return (
    coursts.map((item, index) => {

      return(
        <div key={item.id}>
          <input
            type='checkbox'
            onChange={() => {changeChecked(item.id)}}
            checked={checked.includes(item.id)}
          />
          {item.name}
        </div>
      )
        
    })
  );
}

export default Checkbox;
