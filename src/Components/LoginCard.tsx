import { useState } from 'react'
import eye from '../assets/images/eye.png'

function LoginCard() {

    const [loginDetails, setLoginDetails] = useState({
        userName: "",
        password: "",
    })

    const [showPass, setShowPass] = useState(false)

  return (
    <div className="container max-w-lg ml-auto mr-auto">
        <div className="login-card-container rounded-lg px-5 py-8">
            <h2 className="text-sm text-atlys-xs">WELCOME BACK</h2>
            <h1 className="text-white text-lg">Log into your account</h1>
            <div className="form-container">
                <div className="my-5">
                    <label className="text-left text-atlys-md text-sm block mb-2">Email or Username</label>
                    <input onChange={(e) => setLoginDetails({...loginDetails, userName: e.target.value})} className="block w-full bg-transparent p-3 text-white placeholder-atlys-small" placeholder="Enter your email or username" />
                </div>
                <div>
                    <div className="flex justify-between">
                        <label className=" text-atlys-md text-sm mb-2">Password</label>
                        <a className="no-underline" href="/#"><label className=" text-atlys-md text-xs mt-2 cursor-pointer">Forgot Password?</label></a>
                    </div>
                    <div className="relative">
                        <input type={showPass ? "text" : "password"} onChange={(e) => setLoginDetails({...loginDetails, password: e.target.value})} className="block w-full bg-transparent p-3 text-white placeholder-atlys-small" placeholder="Enter your password" />
                        <img onClick={() => setShowPass(!showPass)} className="block absolute cursor-pointer inset-y-0 my-auto right-3" src={eye} alt="show password"/>
                    </div>
                </div>
                <button className="w-full block p-3 mt-4 text-white">
                    Login now
                </button>
                <div className="text-left text-sm mt-2">
                    <a className="no-underline text-atlys-small" href="/blogs">Not registered yet? <span className="text-white">Register →</span></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginCard