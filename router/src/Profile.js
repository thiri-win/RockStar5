import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = props => {
    let {name} = useParams();

    return (
        <div>
            <h1>Profile</h1>
            <p>This is profile for {name}</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. At adipisci quas odio accusamus tempora voluptate repellendus mollitia suscipit perspiciatis?</p>
        </div>
    )
}

export default Profile