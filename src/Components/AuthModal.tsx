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
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className={`fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
          </div>
          <div className={`shadow-lg w-full transform transition-all duration-300 ease-in-out ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
            {!registerFlag ? 
              <LoginCard popup={true} register={false} onClose={onClose} setRegister={setRegister}/> : 
              <LoginCard popup={true} register={true} onClose={onClose} setLogin={setLogin}/>
            }
          </div>
        </div>
      )}
    </>
  );
};

export default AuthModal;
