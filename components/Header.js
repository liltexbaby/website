import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Link from 'next/link'


const Header = () => {

    const { user } = useContext(AuthContext)

    return(

    <div className="headerContainer">
        
        <div className="headerContent">
            
        <div style={{fontWeight:900}}>
        <Link href="/">JONATHAN PINTO</Link>
        </div>


        <div>
           {user ? (
               <div>
                <Link href="/account"><a>{user.email}</a></Link>
               
               </div>
           ) : (
            <Link href="/login"><a>Login</a></Link>
           )}
        </div>
        </div>

    </div>
    

    )
    }

export default Header;