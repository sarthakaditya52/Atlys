import { useState } from 'react'
import eye from '../assets/images/eye.png'

type LoginProps = {
    popup: Boolean,
    register: Boolean,
    onClose?: () => void,
    setRegister?: () => void,
    setLogin?: () => void
}

function LoginCard(props: LoginProps) {

    const [loginDetails, setLoginDetails] = useState({
        email: "",
        userName: "",
        password: "",
    })

    const [showPass, setShowPass] = useState(false)

  return (
    <div className="container max-w-lg ml-auto mr-auto px-2 sm:px-0">
        <div className="login-card-container relative rounded-lg px-5 py-8">
            {props.popup && <div onClick={props.onClose} className="absolute right-6 top-6 bg-atlys-button w-6 h-6 rounded-full cursor-pointer">
                <button className="block m-auto h-full text-xs">&#x2715;</button>
            </div>}
            <h2 className="text-sm text-atlys-xs">{props.register ? "SIGN UP" : "WELCOME BACK"}</h2>
            <h1 className="text-white text-lg">{props.register ? "Create an account to continue" : "Log into your account"}</h1>
            <div className="form-container mt-10">
                <div className="my-6">
                    <label className="text-left text-atlys-md text-sm block mb-2">{props.register ? "Email" :  "Email or Username"}</label>
                    <input onChange={(e) => setLoginDetails({...loginDetails, email: e.target.value})} className="block w-full bg-transparent p-3 text-white placeholder-atlys-small" placeholder={props.register ? "Enter your email" : "Enter your email or username"} />
                </div>
                {props.register && <div className="my-6">
                    <label className="text-left text-atlys-md text-sm block mb-2">Username</label>
                    <input onChange={(e) => setLoginDetails({...loginDetails, userName: e.target.value})} className="block w-full bg-transparent p-3 text-white placeholder-atlys-small" placeholder="Choose a preferred username" />
                </div>}
                <div>
                    <div className="flex justify-between">
                        <label className=" text-atlys-md text-sm mb-2">Password</label>
                        <a className="no-underline" href="/#"><label className=" text-atlys-md text-xs mt-2 cursor-pointer">Forgot Password?</label></a>
                    </div>
                    <div className="relative">
                        <input type={showPass ? "text" : "password"} onChange={(e) => setLoginDetails({...loginDetails, password: e.target.value})} className="block w-full bg-transparent p-3 text-white placeholder-atlys-small" placeholder={props.register ? "Choose a strong password" : "Enter your password"} />
                        {showPass && <span className="absolute inset-y-0 my-auto font-semibold mt-3 right-5 rotate-12 text-atlys-small disable-pass">/</span>}
                        <img onClick={() => setShowPass(!showPass)} className="block absolute cursor-pointer inset-y-0 my-auto right-3" src={eye} alt="show password"/>
                    </div>
                </div>
                <a className="w-full block p-3 mt-6 cursor-pointer text-white bg-atlys-blue" href='/blogs'>
                    Login now
                </a>
                <div className="text-left text-sm mt-3">
                    <button onClick={props.register ? props.setLogin : props.setRegister} className="no-underline text-atlys-small bg-transparent">{props.register ? "Already have an account?" : "Not registered yet?"} <span className="text-white">{props.register ? "Login" : "Register"} →</span></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginCard