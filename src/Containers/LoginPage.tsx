import LoginCard from '../Components/LoginCard'
import shape from '../assets/images/Shape.png'

function LoginPage() {
  return (
    <div className="container flex flex-col align-middle justify-center h-screen m-auto">
      <div>
        <img className="w-10 mb-8 block m-auto" src={shape} alt='login-top' />
      </div>
      <LoginCard popup={false} register={false} />
    </div>
  )
}

export default LoginPage