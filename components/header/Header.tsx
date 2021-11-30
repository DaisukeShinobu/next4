import React from 'react'
import Logout from '../Logout';

const Header = () => {
    return (
        <div>
            <button onClick={Logout}>ログアウト</button>
        </div>
    )
}

export default Header;