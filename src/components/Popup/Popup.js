import React, { useContext, useState } from 'react'
import Vector from '../../assets/Vector.png'
import Ex from '../../assets/Exclam.png'
import AppContext from '../../context'
import './style.css'

const Popup = () => {
    const {setIsClicked, headline, description,fonts} = useContext(AppContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [font, setFont] = useState('')
    const [first, setFirst] = useState(true)
    let validate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let mailvalidate = validate.test(email)

    function handleSubmit(e) {
        e.preventDefault()
        setFirst(false)
        if(name && email) {
                localStorage.setItem('Name:', name)
                localStorage.setItem('Email:', email)
                localStorage.setItem('Font:', font)
            setIsClicked(true)
        }
    } 

  return (
    <div className="popup">
        <div className="close">
            <img src={Vector} alt="close" />
        </div>
        <div className="headline">
            {headline}
        </div>
        <div className="description">
            {description}
        </div>
        <form onSubmit={handleSubmit}>
            <input 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder='Your name' 
                className='display-input'
            />
            {!name&&!first ? <div className='validation'><img src={Ex} alt="" /> This field is required</div> : ''}
            <input 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                placeholder='Email' 
                className='display-input'
            />
            {!email&&!first ? 
            <div className='validation'><img src={Ex} alt="" /> <span>This field is required</span></div> 
            : !mailvalidate&&!first ? <div className='validation'><img src={Ex} alt="" /> <span>Invalid email address</span></div> : ''}
            <select required onChange={(e) => setFont(e.target.value)} name='fontlist' className='display-input'>
                <option value='' selected disabled hidden>Select Font</option>
                {fonts.map((item, index) => {
                    return <option key={index} value={item}>{item}</option>
                })}
            </select>
            <input type='submit' className='btn' value={'GET MY 30% OFF'}/>
        </form>
    </div>

  )
}

export default Popup