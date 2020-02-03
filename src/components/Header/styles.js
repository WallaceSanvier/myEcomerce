import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;
  text-align: center;
  flex-direction: row;

  .logo {
    display: flex;
    flex-direction: row;
    color: #fff;
    align-items: center;
    text-decoration: none;
    padding: 10 px;

    > h1 {
      display: flex;
      flex-direction: row;
      color: #fff;
      text-decoration: none;
      text-align: center;
    }
  }
  img {
    display: flex;
    width: 70px;
    height: 70px;
    border: 2px solid black;
    border-radius: 50%;
  }
`;

export const Cart = styled(Link)`
  display: flex;
  text-align: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }

  div {
    text-align: right;
    margin-right: 10px;
  }

  strong {
    display: block;
    color: #fff;
  }

  span {
    font-size: 12px;
    color: #999;
  }
`;
