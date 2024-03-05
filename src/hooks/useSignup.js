import { useState} from 'react'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (id, pswd,role) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/home/signup', {
            method:'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({id, pswd,role})
        })
        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok) {
            localStorage.setItem('user' , JSON.stringify(json))

            // update the Auth context
            dispatch({type: 'LOGIN', payload : json})
            setIsLoading(false)
        }

    }
    return {signup, isLoading, error}
} 

