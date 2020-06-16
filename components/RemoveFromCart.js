import React, { useState } from 'react';
import Cookie from 'js-cookie';
import nextCookies from 'next-cookies';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RemoveFromCart(props) {
  const unitsInCart = Cookie.getJSON('cart') || [];
  console.log(unitsInCart);

  function removeCookies() {
    const product = {
      name: props.product.name,
      price: props.total,
      id: props.product.id,
      amount: props.pieces,
      img: props.product.img,
      info: props.product.info,
    };

    if (props.pieces <= 0) {
      alert("already empty, can't take from 0!");
    }

    const unitFilter = unitsInCart.find(unit => unit.id === product.id);

    // check if id already exists in shoppingCart,
    // remove amount - pieces, update totalPrice (amount - pieces) * unit
    if (unitFilter) {
      const removeUnits = unitsInCart.map(unit => {
        if (unit.id === props.product.id) {
          return {
            ...unit,
            amount: unit.amount - props.pieces,
            price: (unit.amount - props.pieces) * unit.price,

            // price: unit.price * unit.amount,
          };
        } else {
          return unit;
        }
      });
      Cookie.set('cart', removeUnits);
    } else {
      unitsInCart.push(product);
      Cookie.set('cart', unitsInCart);
    }
    console.log('are you really sure about removing this item? xd');
    window.location.reload();
  }

  // console.log('name', product);
  return (
    <div>
      <button onClick={removeCookies}>Remove from cart :cry: </button>
    </div>
  );
}
