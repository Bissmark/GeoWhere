import { useState } from 'react'
import { supabase } from './supabaseClient'

export default function Auth() {
    const [email, setEmail] = useState('')

    const handleLogin = async (email) => {
        await supabase.auth.signIn({ email });
        }

}