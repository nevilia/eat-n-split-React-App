export default function FriendsList({friends, onSelection, selectedFriend}){
    
    return (
        <div className='friendList'>
            {friends.map((friend) => (
                <div className= {`friend ${selectedFriend && selectedFriend.id === friend.id ? "selected" : ""}`} key={friend.id}>
                    <div className='head'>
                        <img src={friend.image} alt="img" style={{border: '1px', borderRadius:'50%', height:'40px'}} /> 
                        <p>{friend.name}</p>
                        <button onClick={() => onSelection(friend)}>Select</button>
                    </div>
                    <div >
                        {friend.balance < 0 ? <span className="red">You owe {friend.name} $ {Math.abs(friend.balance)} </span> : 
                            friend.balance > 0 ? <span className="green">{friend.name} owes you $ {friend.balance}</span> : 
                            <span className="gray">You and {friend.name} are even</span>
                        }
                     </div>   
                </div>
            ))}
            
        </div>    
        
    )
}

