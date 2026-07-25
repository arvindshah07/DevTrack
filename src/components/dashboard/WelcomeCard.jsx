import UserContext from '../../context/UserContext'
import { useContext} from 'react'
function WelcomeCard() {
  const {username}=useContext(UserContext);
  return (
    <>
     <div className='bg-white rounded-xl shadow-md p-6'>
      <h1 className='text-3xl font-bold'>
        Welcome, {username} Back 👋 
        </h1>
      <p className='text-gray-600 mt-2'>
        Start managing your projects efficiently .
        </p>
     </div>
    </>
  )
}

export default WelcomeCard