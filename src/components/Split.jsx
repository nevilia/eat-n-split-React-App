import React, { useState } from 'react'

export default function Split({selectedFriend, onSplitBill}) {
    const [ bill, setBill] = useState("")
    const [paidByUser, setPaidByUser] = useState("")
    const paidByFriend = bill ? bill - paidByUser : ""
    const [whoIsPaying, setWhoIsPaying] = useState("user")

    function handleSubmit(e){
        e.preventDefault()

        if (!bill || !paidByUser) return

        onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser)

    }

    return (
        <form className="split" onSubmit={handleSubmit}>
            <h1>Split with {selectedFriend.name}</h1>
                <label>Bill Value
                    <input type="text" value={bill} onChange={(e) => setBill(Number(e.target.value))} />
                </label>
                <label>Your Expense
                    <input type="text" value={paidByUser} onChange={(e) => setPaidByUser( Number(e.target.value) > bill ? paidByUser : Number(e.target.value))} />
                </label>
                <label>{selectedFriend.name}'s Expense
                    <input type="text" disabled value={paidByFriend} className="disabled-input"/>
                </label>
                <label>Who's paying the bill?
                    <select value={whoIsPaying} onChange={(e) => setWhoIsPaying(e.target.value)}>
                        <option value="user">You</option>
                        <option value="friend">{selectedFriend.name}</option>
                    </select>
                </label>
                <button type="submit" style={{marginTop: "100px", marginLeft: "300px"}}>Split</button>
            
        </form>
    )
}
