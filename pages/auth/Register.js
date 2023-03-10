import { Button } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Register = () => {
    return (
        <div className="auth__Wrapper">
            <Head>
                <title>
                    Register - deep
                </title>
            </Head>
            <div className='auth__Box'>
                <div className="header">
                    <h4>deep</h4>
                    <p>Register to create a account</p>
                </div>
                <form>
                    <div className='auth__InputBox'>
                        <input type="text" required />
                        <label>First name</label>
                    </div>
                    <div className='auth__InputBox'>
                        <input type="text" required />
                        <label>Last name</label>
                    </div>
                    <div className='auth__InputBox'>
                        <input type="text" required />
                        <label>Username</label>
                    </div>
                    <div className='auth__InputBox'>
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div className='auth__Dialouge'>
                        <p>By registering you agree to our terms and conditions</p>
                    </div>
                    <div className='auth__Button'>
                        <Button type='submit'>Register</Button>
                    </div>
                </form>
                <div className='auth__Links'>
                    <p>Already have an account? <Link href="/auth/login">Login now</Link></p>
                </div>
            </div>
        </div>
    )
}

Register.getLayout = (page) => {
    return <>{page}</>
}

export default Register