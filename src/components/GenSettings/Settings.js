import React, { useContext } from 'react'
import AppContext from '../../context'
import './style.css'

const Settings = () => {
    const {setSuccess, setHeadline, setDescription} = useContext(AppContext)
    

  return (
    <div className="settings">
        <div className="settings-content">
            <div className='gen-settings'>
                General Settings
            </div>
            <div className='content'>
                <p className='header'>Headline</p>
                <input 
                    onChange={(e) => setHeadline(e.target.value)}
                    className='input' 
                    type="text" 
                    placeholder='NEW STUFF' 
                />
            </div>
            <div className="content">
                <p className='header'>Description</p>
                <textarea 
                    onChange={(e) => setDescription(e.target.value)}
                    className='input text' 
                    type="text" 
                    placeholder='Sign up for our newsletter and get 15% off your first order!' 
                />
            </div>
            <div className="content">
                <p className='header'>Success Message</p>
                <input 
                    onChange={(e) => setSuccess(e.target.value)}
                    className='input' 
                    type="Success" 
                    placeholder='Success'
                />
            </div>
        </div>
    </div>
  )
}

export default Settings