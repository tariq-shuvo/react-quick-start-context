import React, {useContext} from 'react'
import { UserContext } from '../store/context'

const About = props => {
    const {value} = useContext(UserContext)
    return (
        <div>
            <h1>About</h1>
            <pre>{JSON.stringify(value)}</pre>
        </div>
    )
}

export default About
