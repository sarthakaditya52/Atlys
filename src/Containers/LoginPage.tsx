import { useState } from 'react'
import LoginCard from '../Components/LoginCard'
import shape from '../assets/images/Shape.png'

function LoginPage() {
  const [registerFlag, setRegisterFlag] = useState(false)

  const setRegister = () => {
    setRegisterFlag(true)
  }

  const setLogin = () => {
    setRegisterFlag(false)
  }

  return (
    <div className="container flex flex-col align-middle justify-center h-screen m-auto">
      <div>
        <img className="w-10 mb-8 block m-auto" src={shape} alt='login-top' />
      </div>
      {!registerFlag ? 
          <LoginCard popup={false} register={false} setRegister={setRegister}/> : 
          <LoginCard popup={false} register={true} setLogin={setLogin}/>
        }
    </div>
  )
}

export default LoginPage