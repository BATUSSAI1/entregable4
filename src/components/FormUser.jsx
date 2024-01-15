import { useEffect } from "react";
import { useForm } from "react-hook-form";
import './style/FormUser.css'

        
        const FormUser = ({createUser, userUpdate, updateUser,setUserUpdate , setInFormClose}) => {

const {handleSubmit, register, reset} = useForm()

useEffect(() =>{
reset (userUpdate)
}, [userUpdate])

const submit = data => {
if(userUpdate){
//update
updateUser(userUpdate.id, data)
setUserUpdate()
} else {
// crear 
createUser(data)
}
    reset({
        email:'',
        password:'',
        first_name:'',
        last_name:'',
        birthday:''
    })
    setInFormClose(true)

}

const handleExit =() => {
  setInFormClose (true)
  reset({
    email:'',
    password:'',
    first_name:'',
    last_name:'',
    birthday:''
})
setUserUpdate()
  
}

  return (
    <form className= " form"onSubmit={handleSubmit(submit)}>
      <div className="form_x" onClick={handleExit}> x </div>
      <h2 className="form_title">{ userUpdate ? ' Update User' : 'Create New User'}</h2>
      <label className="form_label">
        <span className="form_name">Email</span>
        <input className="form_field" {...register('email')} type="email" placeholder="ejemplo@mail.com"/>
      </label>
      <label className="form_label">
        <span className="form_name">Password</span>
        <input className="form_field" {...register('password')} type="password" />
      </label>
      <label className="form_label">
        <span className="form_name">First name</span>
        <input className="form_field" {...register('first_name')} type="text" />
      </label>
      <label className="form_label">
        <span className="form_name">Last name</span>
        <input className="form_field" {...register('last_name')} type="text" />
      </label>
      <label className="form_label">
        <span className="form_name">Brithday</span>
        <input className="form_field" {...register('birthday')} type="date" />
      </label>
      <button className="form_btn"> { userUpdate ? 'Update' : 'Create'} </button>
    </form>
  );
};

export default FormUser;
