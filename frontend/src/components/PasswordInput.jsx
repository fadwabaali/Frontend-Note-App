import {useState} from 'react'
import {FaRegEye, FaRegEyeSlash} from 'react-icons/fa6'

const PasswordInput = ({value, onChange, placeholder}) => {
    const [isShowPassword, setIsShowPassword] = useState(false)
    
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }
  return (
    <div className='flex justify-between items-center pr-2 w-full border border-gray-200 rounded-md shadow-sm'>
        <input 
            value={value} 
            onChange={onChange}
            type={isShowPassword ? 'text' : 'password'} 
            placeholder={placeholder || "Enter Password"}
            className='px-4 py-2 focus:outline-none focus:ring-primary focus:border-primary'
            required/>
        <button onClick={toggleShowPassword} className='toggle-password-btn'>
            {isShowPassword? (
                <FaRegEye
                    size={22}
                    className="text-primary cursor-pointer"
                    onClick={()=> toggleShowPassword()}
                /> 
            ):(
                <FaRegEyeSlash 
                    size={22}
                    className="text-slate-400 cursor-pointer"
                    onClick={()=> toggleShowPassword()}
                />
            )}
        </button>
    </div>
  )
}

export default PasswordInput