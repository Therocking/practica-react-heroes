import { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { useForm } from '../../hooks/useForm'
// import { MsgAlert } from '../../heroes/components/MsgAlert';

export const Loginpage = () => {

  const {name, onInputChange } = useForm({
    name: ''
  })

  const { login } = useContext( AuthContext )

  const navigate = useNavigate();

  const onLogin = () => {
    if( name.length < 1 ) return

    const lastPath = localStorage.getItem('lastPath') || '/'

    login( name );

    navigate( lastPath, {
      replace: true
    })
  }

  return (
    <div className="container mt-5">
      
      <h1>Login</h1>
      <hr />

      <input 
        type="text"
        className='form-control mb-2' 
        placeholder='Name'
        onChange={ onInputChange }
        name='name'
      />

      {/* {
           <MsgAlert texto={'El campo no puede ir vacio'} clases={"alert alert-primary animate__animated animate__fadeIn"}/>
      } */}

      <button
        className="btn btn-primary"
        onClick={ onLogin }
      >
        Login
      </button>

    </div>
  )
}
