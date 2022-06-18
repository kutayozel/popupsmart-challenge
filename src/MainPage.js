import React, { useContext } from 'react'
import Popup from './components/Popup/Popup'
import Settings from './components/GenSettings/Settings'
import SuccessPopup from './components/SuccessPopup/SuccessPopup'
import AppContext from './context'

const MainPage = () => {
  const {isClicked} = useContext(AppContext)
  return (
    <div className='page'>
        <Settings/>
        <div className="display">
            <div className="bg" >
                {isClicked ? <SuccessPopup/> : <Popup/> }
            </div>
        </div>
    </div>
  )
}

export default MainPage