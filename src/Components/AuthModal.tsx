import { useState } from 'react';
import LoginCard from './LoginCard';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModal = ({ isOpen, onClose }: ModalProps) => {
  const [registerFlag, setRegisterFlag] = useState(false)

  const setRegister = () => {
    setRegisterFlag(true)
  }

  const setLogin = () => {
    setRegisterFlag(false)
  }

  return (
    <div className={`fixed inset-0 flex items-center transform transition-all bg-black bg-opacity-50 backdrop-blur-sm duration-700 justify-center ${isOpen ? "z-50 opacity-100" : "-z-50 opacity-0"}`}>
      <div className={`fixed inset-0 bg-black bg-opacity-50`}>
      </div>
      <div className={`shadow-lg w-full`}>
        {!registerFlag ? 
          <LoginCard popup={true} register={false} onClose={onClose} setRegister={setRegister}/> : 
          <LoginCard popup={true} register={true} onClose={onClose} setLogin={setLogin}/>
        }
      </div>
    </div>
  );
};

export default AuthModal;
