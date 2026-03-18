
import { useState } from 'react'
import './App.css'

function App() {

  const [guest , setGuest] = useState([
    {id: 1, name: 'Anna', isComing: false},
    {id: 2, name: 'Anna', isComing: true},
    {id: 3, name: 'Ilya', isComing: false},
    {id: 4, name: 'Ivan', isComing: true},
  ])

  const [newName , setNewName] = useState('')

  const findGuestById = (id) => {
    guest.find((obj) => obj.id === id )
    //возвращает первый обьект который подошел под условие
  }

  const addGuest = () => {
    if(newName.trim() !== ''){
      const newGuest = {id: Date.now(), name: newName, isComing: false,}
      setGuest(prev => [...prev , newGuest])
      setNewName('')
    }
  }

  const deleteGuest = (idForDel) => {
    setGuest(guest => guest.filter(guest=>guest.id!=idForDel))
  }

  const totalGuest = guest.length

  const comingGuest = guest.filter(guest => guest.isComing===true)

  return (
    <>
      <h1>Список гостей</h1>
      <p>Придут: {comingGuest.length}/{totalGuest}</p>

      <input
       type="text"
       value={newName}
       onChange={(e) => setNewName(e.target.value)}
      />
      <button onClick={addGuest}>addGuest</button>

      {guest.map(guest => 
        (<div key={guest.id} style={{marginTop: 10}}>
          id: {guest.id}, name: {guest.name}, isComing: {guest.isComing ? '✅' : '❌' }
          <button onClick={()=>deleteGuest(guest.id)}>DELETE</button>
         </div>)
      )}

    </>
  )
}

export default App
