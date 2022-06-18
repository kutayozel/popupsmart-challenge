import React, { useContext } from 'react'
import AppContext from '../../context'
import SuccessImg from '../../assets/Subtract.png'
import './style.css'

const SuccessPopup = () => {
    const {success} = useContext(AppContext)

  return (
    <div className="popup">
        <div className='successimg'>
            <img src={SuccessImg} alt="success" />
        </div>
        <div className="headline">
            {success}
        </div>
    </div>
  )
}

export default SuccessPopup