import { Button } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const Login = () => {
    return (
        <div className="auth__Wrapper">
            <Head>
                <title>
                    Login - deep
                </title>
            </Head>
            <div className='auth__Box'>
                <div className="header">
                    <h4>deep</h4>
                    <p>Login to continue...</p>
                </div>
                <form>
                    <div className='auth__InputBox'>
                        <input type="text" required />
                        <label>Username</label>
                    </div>
                    <div className='auth__InputBox'>
                        <input type="password" required />
                        <label>Password</label>
                    </div>
                    <div className='auth__Dialouge'>
                        <Link href="forgetpassword">Forgot password?</Link>
                    </div>
                    <div className='auth__Button'>
                        <Button type='submit'>Login</Button>
                    </div>
                </form>
                <div className='auth__Links'>
                    <p>Don&apos;t have an account? <Link href="/auth/register">Register now</Link></p>
                </div>
            </div>
        </div>
    )
}

Login.getLayout = (page) => {
    return <>{page}</>
}

export default Login