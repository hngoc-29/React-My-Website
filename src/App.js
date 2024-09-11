import Checkbox from './components/Checkbox'
import Effect from './components/Effect-1'
import Effect2 from './components/Effect-2'
import Todolist from './components/Todolist'
import Todolist2 from './components/Todolist2'
import { useState } from 'react'
function App() {
  const [hien, setHien] = useState(false)
  return (
    <div style={{textAlign: 'center'}}>
      <button onClick={() => setHien(!hien)}>Toggle</button>
      {hien && <Effect2 />}
    </div>
  )
}
export default App