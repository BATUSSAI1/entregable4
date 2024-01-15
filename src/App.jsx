import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hook/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [userUpdate, setUserUpdate] = useState()
  const [inFormClose, setInFormClose] = useState(true)

  const baseUrl = 'https://users-crud.academlo.tech'
  const [users, getUsers , deleteUser , updateUser , createUser ] = useFetch(baseUrl)

  useEffect ( () => {
    getUsers()
}, [])

const handelOpen = () => {
  setInFormClose(false)
}
    
 console.log(users);

  return (
    <div>
      
      <h1 className='title'> CRUD</h1>
      <div className='btn_open'><button className = "open_form" onClick={handelOpen}> Sing In</button></div>
    <div className={`form_container ${inFormClose && 'form_close'}`}>
      <FormUser 
        createUser={createUser}
        userUpdate={userUpdate}
        updateUser={updateUser}
        setUserUpdate={setUserUpdate}
        setInFormClose={setInFormClose}
      />
      </div>
      
      <div className='container_user'>
        {
          users?.map(user => (
            <UserCard
            key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUserUpdate={setUserUpdate}
            setInFormClose={setInFormClose}
            
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
