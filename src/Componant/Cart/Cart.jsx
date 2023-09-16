import React from 'react';

const Cart = ({ course }) => {
    const { title } = course;
    return (

        <>
            <div>

                <li>{title}</li>
               
            </div>
        </>
    );
};

export default Cart;