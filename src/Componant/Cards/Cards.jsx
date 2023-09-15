import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className='w-2/3'> 
        
        <div className='md: grid grid-cols-3 gap-3'>
            {
                cards.map(card => <Card card={card}></Card>)
            }
        </div>


        </div>
    );
};

export default Cards;