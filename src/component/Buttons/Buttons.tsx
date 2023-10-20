import React, { ReactNode } from "react";
import styles from "./button.module.css";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
