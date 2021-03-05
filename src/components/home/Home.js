import React, {useContext} from 'react'
import Login from '../../api/Login'
import { UserContext } from '../store/context'

const Home = props => {
    const {value, setValue} = useContext(UserContext)
    return (
        <div>
            <h1>Home</h1>  
            <pre>{JSON.stringify(value)}</pre>
            {value==null?<button onClick={async () =>{
                let res = await Login()
                setValue(res)
            }}>Login</button>:<button onClick={() =>{
                setValue(null)
            }}>Logout</button>}
        </div>
    )
}

export default Home