import React from 'react';

const Card = (props) => {
    return (
        <div className='bg-gold dib ma3 pa3 br3 tc bw1 shadow-3 grow'> 
            <img alt='robots' src={`https://robohash.org/${props.robot.username}?set=set5&bgset=bg1&size=200x200`}/>
            <div>
                <h2 >{props.robot.name}</h2>
                <p>{props.robot.email}</p>
            </div>
        </div>
    )
}

export default Card;