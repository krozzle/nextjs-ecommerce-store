import React, { useState } from 'react';
import Cookie from 'js-cookie';
import nextCookies from 'next-cookies';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function IncrementCart(props) {
  const unitsInCart = Cookie.getJSON('cart') || [];
  console.log(unitsInCart);

  function incrementCookies() {
    const product = {
      name: props.product.name,
      price: props.total,
      id: props.product.id,
      amount: props.pieces,
      img: props.product.img,
      info: props.product.info,
    };

    if (props.pieces <= 0 ) {
      alert("already empty, can't take away from 0!");
    } else (props.pieces >= 9) {
      alert("sorry, dawg/dawgette..we can't have you and 8 of your closest ones all looking the same.")
    }

    const unitFilter = unitsInCart.find(unit => unit.id === product.id);

    // check if id already exists in shoppingCart,
    // increment amount + pieces, update totalPrice (amount + pieces) * unit
    // similar to AddToCart.js
    if (unitFilter) {
      const incrementUnits = unitsInCart.map(unit => {
        if (unit.id === props.product.id) {
          return {
            ...unit,
            amount: unit.amount + props.pieces,
            price: (unit.amount + props.pieces) * unit.price,

            // price: unit.amount * unit.price,
          };
        } else {
          return unit;
        }
      });
      Cookie.set('cart', incrementUnits);
    } else {
      unitsInCart.push(product);
      Cookie.set('cart', unitsInCart);
    }
    console.log('glad you add :x');
    window.location.reload();
  }

  // console.log('name', product);
  return (
    <div>
      <button onClick={incrementCookies}>Add some mo'</button>
    </div>
  );
}
