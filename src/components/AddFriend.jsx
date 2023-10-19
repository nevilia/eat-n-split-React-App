import React, { useState } from 'react'


export default function AddFriend({onAddFriend}) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")
    const [onButton, setOnButton] = useState(false)
    
    function handleSubmit(e){
        e.preventDefault() 
        const id =crypto.randomUUID()

        if (!name || !image) return

        let newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0,
            
        }
        onAddFriend(newFriend)

        setName("")
        setImage("https://i.pravatar.cc/48")
        setOnButton(false)
    }

    
    if(!onButton){
        return(
            <button className='newFriend' onClick={() => setOnButton(true)}>Add Friend</button>
        )
    }
    return (
        <form className='addFriend' onSubmit={handleSubmit}  id="">
            <button style={{marginLeft: '335px'}} onClick={() => setOnButton(false)} >Close</button>
            <label>Friend Name: <input type="text" value={name} placeholder='Type Name...' onChange={(e) => setName(e.target.value)} /> </label> 
            <label>Image URL:  <input type="text" value={image} placeholder='Add URL of image...' onChange={(e) => setImage(e.target.value)} /> </label>
            <button style={{marginLeft: '335px'}} type="submit" >Add</button>

        </form>
  )
}
