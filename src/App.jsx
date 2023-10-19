import React, { useState } from 'react'
import FriendsList from './components/FriendsList'
import AddFriend from './components/AddFriend'
import Split from './components/Split'

export default function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [friends, setFriends] = useState(initialFriends)

  const [selectedFriend, setSelectedFriend] = useState(null)

  function handleAddFriend(friend){
    setFriends((friends) => [...friends, friend])
  }

  function handleSelection(friend){
    setSelectedFriend(friend)
  }

  function handleSplitBill (value){
    setFriends(friends => friends.map(friend => friend.id === selectedFriend.id ? {...friend, balance: friend.balance + value} : friend))
    setSelectedFriend(null)
  }
  return (
    <>
      <div className='row'>
        <div className='col'>
          <FriendsList friends={friends} selectedFriend={selectedFriend} onSelection={handleSelection}/>
          <AddFriend onAddFriend={handleAddFriend}/>
        </div>
        <div className="col">
          {selectedFriend && <Split selectedFriend={selectedFriend} onSplitBill = {handleSplitBill} />}
        </div>
        
      </div>

    </>
  )
}
