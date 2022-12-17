import { Button } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

const ForgetPassword = () => {
    return (
        <div className="auth__Wrapper">
            <Head>
                <title>
                    Forget Password - deep
                </title>
            </Head>
            <div className='auth__Box'>
                <div className="header">
                    <h4>deep</h4>
                    <p>Enter Username to regenerate password</p>
                </div>
                <form>
                    <div className='auth__InputBox'>
                        <input type="text" required />
                        <label>Username</label>
                    </div>
                    <div className='auth__Button'>
                        <Button type='submit'>Regenerate</Button>
                    </div>
                </form>
                <div className='auth__Links'>
                    <p>Back to <Link href="/auth/login">Login</Link></p>
                </div>
            </div>
        </div>
    )
}

ForgetPassword.getLayout = (page) => {
    return <>{page}</>
}

export default ForgetPassword