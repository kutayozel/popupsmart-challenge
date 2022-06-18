import { createContext, useEffect, useState } from "react"
import React from "react"

const urlFonts = 'https://apiv2.popupsmart.com/api/googlefont'
const AppContext = createContext()

export function AppProvider({children}) {
    const [headline, setHeadline] = useState('NEW STUFF')
    const [description, setDescription] = useState('Sign up for our newsletter and get 15% off your first order!')
    const [success, setSuccess] = useState('Success')
    const [fonts, setFonts] = useState([])
    const [isClicked, setIsClicked] = useState(false)

    const fetchFonts = async() => {
        const response = await fetch(urlFonts)
        const data = await response.json()
        const removal = data.filter(a => a.category !== 'monospace').map((font) => {
            return font.family
        })
        const sortedFonts = removal.sort(function(a,b){return (a > b ? 1 : (a === b ? 0 : -1))})
        
        setFonts(sortedFonts)
    }

    useEffect(() => {
      fetchFonts()
    }, [])

    return(
        <AppContext.Provider value={{
            headline,
            setHeadline,
            description,
            setDescription,
            success,
            setSuccess,
            fonts,
            isClicked,
            setIsClicked,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
