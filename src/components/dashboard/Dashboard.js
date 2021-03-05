import React, {useContext} from 'react'
import { UserContext } from '../store/context'

const Dashboard = props => {
    const {value} = useContext(UserContext)
    return (
        <div>
            <h1>Dashboard</h1>
            <pre>{JSON.stringify(value)}</pre>
        </div>
    )
}

export default Dashboard