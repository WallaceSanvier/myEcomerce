import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { MdShoppingBasket } from "react-icons/md";

import { Container, Cart } from "./styles";

import logo from "../../assets/images/images.png";

export default function Header() {
  const cartSize = useSelector(state => state.cart.length);
  return (
    <Container>
      <Link to="/">
        <div className="logo">
          <img src={logo} alt="SanvMochilas" />
          <h1> SANV </h1>
        </div>
      </Link>

      <Cart to="/cart">
        <div>
          <strong> Meu carrinho </strong>
          <span>{cartSize} itens</span>
        </div>

        <MdShoppingBasket size={36} color="#fff" />
      </Cart>
    </Container>
  );
}
