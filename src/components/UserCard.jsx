import './style/CardUser.css'

const UserCard = ({user, deleteUser,setUserUpdate,setInFormClose}) => {

    const handleDelete = () => {
        deleteUser(user.id)
}

    const handleEdit= () => {
        setUserUpdate(user)
        setInFormClose(false)
    }

  return (
    

        <article className="user_container">
        <h2 className="user_name">{user.first_name} {user.last_name}</h2>
        <hr />

    <ul>
        <li><span className="user_email">Email</span><span className='user_email2'>{user.email}</span></li>
        <li><span className="user_birth">Birthday</span> <i className='bx bx-gift bx-sm deplegable'></i> <span className='user_brith2'>{user.birthday}</span></li>
    </ul>
    <hr />
    <footer className='user_btn'>
    <button className="user_delete" onClick={handleDelete}><i className='bx bx-trash bx-sm'></i></button>
    <button className= "user_edit"onClick={handleEdit}><i className='bx bx-edit-alt bx-sm' ></i></button>
    </footer>
    
    
    </article>
    
    
  )
}

export default UserCard