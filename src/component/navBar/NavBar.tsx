import React from "react";
interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return <div>amount of items {cartItemsCount}</div>;
};

export default NavBar;
