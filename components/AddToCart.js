import React, { useState } from 'react';
import Cookie from 'js-cookie';
import nextCookies from 'next-cookies';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AddToCart(props) {
  const unitsInCart = Cookie.getJSON('cart') || [];
  console.log(unitsInCart);

  function makeCookies() {
    // getting the props out this bish
    const product = {
      name: props.product.name,
      price: props.total,
      id: props.product.id,
      amount: props.pieces,
      img: props.product.img,
      info: props.product.info,
    };

    if (props.pieces <= 0) {
      alert('empty!');
    }

    const unitFilter = unitsInCart.find(unit => unit.id === product.id);

    // check if id already exists in shoppingCart,
    // add amount + pieces, update totalPrice (amount + pieces) * unit
    if (unitFilter) {
      const multipleUnits = unitsInCart.map(unit => {
        if (unit.id === props.product.id) {
          return {
            ...unit,
            amount: unit.amount + props.pieces,
            price: (unit.amount + props.pieces) * unit.price,

            // price: unit.price * unit.amount,
          };
          console.log('unit', unit);
        } else {
          return unit;
        }
      });
      Cookie.set('cart', multipleUnits);
    } else {
      unitsInCart.push(product);
      Cookie.set('cart', unitsInCart);
    }
    console.log('added to the bag of goodness!');
    window.location.reload();
  }

  // console.log('name', product);
  return (
    <div>
      <button onClick={makeCookies}>Add to cart</button>
    </div>
  );
}
