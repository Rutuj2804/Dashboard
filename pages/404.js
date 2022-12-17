import React from 'react'

const NotAvailable = () => {
    return (
        <div className='notAvailable'>
            <h4>deep</h4>
            <p>404 - This page does not exist</p>
        </div>
    )
}

NotAvailable.getLayout = (page) => {
    return <>{page}</>
}

export default NotAvailable