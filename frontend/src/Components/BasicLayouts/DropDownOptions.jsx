import React from 'react'
import { Link } from 'react-router-dom';

const DropDownOptions = (props) => {
    const {setHidden} = props;
    return (
        <div id="dropdown" className={`z-10 ${setHidden?"hidden":""} bg-white divide-y divide-white-100 rounded-lg shadow-lg border-2 w-44 `}>
            <ul className=" text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                <li>
                    <a href="#" className="block px-4 py-2 text-black hover:bg-gray-100 ">Crative</a>
                </li>
                {!localStorage.getItem("token")?<li>
                    <Link to="/login" className="block px-4 py-2 text-black hover:bg-gray-100 ">Login</Link>
                </li>:null}
                
                {localStorage.getItem("token")?<li>
                    <Link to="/signout" className="block px-4 py-2 text-black hover:bg-gray-100 ">Sign out</Link>
                </li>:null}
            </ul>
        </div>
    )
}

export default DropDownOptions