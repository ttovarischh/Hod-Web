import React from "react";
import { useContext } from "react";
import { ThemeContext } from "styled-components";

interface TextProps {
  children: React.ReactNode;
  color?: string;
  center?: boolean;
  uppercase?: boolean;
  offsetTop?: number;
  offsetBottom?: number;
  offsetLeft?: number;
  offsetRight?: number;
  lineHeight?: number;
  size?: number;
  capitalize?: boolean;
  medium?: boolean;
}

export const A_Text = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  return (
    <p
      className={props.medium ? "ppmedium" : "ppbook"}
      style={{
        fontSize: props.size || 18,
        lineHeight: props.lineHeight || "22px",
        color: props.color || theme.text.white,
        margin: 0,
        textAlign: props.center ? "center" : "left",
        marginTop: props.offsetTop ? props.offsetTop : 0,
        marginBottom: props.offsetBottom ? props.offsetBottom : 0,
        marginLeft: props.offsetLeft ? props.offsetLeft : 0,
        marginRight: props.offsetRight ? props.offsetRight : 0,
        textTransform: props.uppercase
          ? "uppercase"
          : props.capitalize
          ? "capitalize"
          : "none",
      }}
    >
      {props.children}
    </p>
  );
};

export const B_Text = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  return (
    <p
      className="ppmedium"
      style={{
        fontSize: props.size || 20,
        lineHeight: props.lineHeight || "24px",
        color: props.color || theme.text.white,
        margin: 0,
        textAlign: props.center ? "center" : "left",
        marginTop: props.offsetTop ? props.offsetTop : 0,
        marginBottom: props.offsetBottom ? props.offsetBottom : 0,
        marginLeft: props.offsetLeft ? props.offsetLeft : 0,
        marginRight: props.offsetRight ? props.offsetRight : 0,
        textTransform: props.uppercase ? "uppercase" : "none",
      }}
    >
      {props.children}
    </p>
  );
};

export const C_Text = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  return (
    <p
      className="ppmedium"
      style={{
        fontSize: props.size || 24,
        lineHeight: props.lineHeight || "25px",
        color: props.color || theme.text.white,
        margin: 0,
        textAlign: props.center ? "center" : "left",
        marginTop: props.offsetTop ? props.offsetTop : 0,
        marginBottom: props.offsetBottom ? props.offsetBottom : 0,
        marginLeft: props.offsetLeft ? props.offsetLeft : 0,
        marginRight: props.offsetRight ? props.offsetRight : 0,
        textTransform: props.uppercase ? "uppercase" : "none",
      }}
    >
      {props.children}
    </p>
  );
};

export const D_Text = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  return (
    <p
      className={props.medium ? "ppmedium" : "ppbook"}
      style={{
        zIndex: 100,
        fontSize: props.size || 40,
        lineHeight: props.lineHeight || "39px",
        color: props.color || theme.text.white,
        margin: 0,
        textAlign: props.center ? "center" : "left",
        marginTop: props.offsetTop ? props.offsetTop : 0,
        marginBottom: props.offsetBottom ? props.offsetBottom : 0,
        marginLeft: props.offsetLeft ? props.offsetLeft : 0,
        marginRight: props.offsetRight ? props.offsetRight : 0,
        textTransform: props.uppercase ? "uppercase" : "none",
      }}
    >
      {props.children}
    </p>
  );
};

export const E_Text = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  return (
    <p
      className={props.medium ? "ppmedium" : "ppbook"}
      style={{
        zIndex: 100,
        fontSize: props.size || 24,
        lineHeight: props.lineHeight || "23px",
        color: props.color || theme.text.white,
        margin: 0,
        textAlign: props.center ? "center" : "left",
        marginTop: props.offsetTop ? props.offsetTop : 0,
        marginBottom: props.offsetBottom ? props.offsetBottom : 0,
        marginLeft: props.offsetLeft ? props.offsetLeft : 0,
        marginRight: props.offsetRight ? props.offsetRight : 0,
        textTransform: props.uppercase ? "uppercase" : "none",
      }}
    >
      {props.children}
    </p>
  );
};

export const F_Text = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  return (
    <p
      className="ppmedium"
      style={{
        zIndex: 100,
        fontSize: props.size || 18,
        lineHeight: props.lineHeight || "22px",
        letterSpacing: "-0.011em",
        color: props.color || "#a4a4ac",
        margin: 0,
        textAlign: props.center ? "center" : "left",
        marginTop: props.offsetTop ? props.offsetTop : 0,
        marginBottom: props.offsetBottom ? props.offsetBottom : 4,
        marginLeft: props.offsetLeft ? props.offsetLeft : 0,
        marginRight: props.offsetRight ? props.offsetRight : 0,
        textTransform: props.uppercase ? "uppercase" : "none",
      }}
    >
      {props.children}
    </p>
  );
};

export const G_Text = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  return (
    <p
      className="ppmedium"
      style={{
        zIndex: 100,
        fontSize: props.size || 11,
        lineHeight: props.lineHeight || "13px",
        letterSpacing: "-0.011em",
        color: props.color || "#a4a4ac",
        margin: 0,
        textAlign: props.center ? "center" : "left",
        marginTop: props.offsetTop ? props.offsetTop : 0,
        marginBottom: props.offsetBottom ? props.offsetBottom : 4,
        marginLeft: props.offsetLeft ? props.offsetLeft : 0,
        marginRight: props.offsetRight ? props.offsetRight : 0,
        textTransform: props.uppercase ? "uppercase" : "none",
      }}
    >
      {props.children}
    </p>
  );
};

export const H_Text = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  return (
    <p
      className={props.medium ? "ppmedium" : "ppbook"}
      style={{
        fontSize: props.size || 16,
        lineHeight: props.lineHeight || "19px",
        color: props.color || theme.text.white,
        margin: 0,
        textAlign: props.center ? "center" : "left",
        marginTop: props.offsetTop ? props.offsetTop : 0,
        marginBottom: props.offsetBottom ? props.offsetBottom : 0,
        marginLeft: props.offsetLeft ? props.offsetLeft : 0,
        marginRight: props.offsetRight ? props.offsetRight : 0,
        textTransform: props.uppercase
          ? "uppercase"
          : props.capitalize
          ? "capitalize"
          : "none",
      }}
    >
      {props.children}
    </p>
  );
};

export const J_Text = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  return (
    <p
      className={props.medium ? "ppmedium" : "ppbook"}
      style={{
        fontSize: props.size || 14,
        lineHeight: props.lineHeight || "17px",
        color: props.color || theme.text.grey,
        margin: 0,
        opacity: 0.8,
        textAlign: props.center ? "center" : "left",
        marginTop: props.offsetTop ? props.offsetTop : 0,
        marginBottom: props.offsetBottom ? props.offsetBottom : 0,
        marginLeft: props.offsetLeft ? props.offsetLeft : 0,
        marginRight: props.offsetRight ? props.offsetRight : 0,
        textTransform: props.uppercase
          ? "uppercase"
          : props.capitalize
          ? "capitalize"
          : "none",
      }}
    >
      {props.children}
    </p>
  );
};

export const Panama = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  return (
    <p
      className="panama"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        fontSize: 200,
        lineHeight: "171px",
        margin: 0,
        color: props.color || theme.text.panama,
      }}
    >
      {props.children}
    </p>
  );
};

export const Big_Panama = (props: TextProps) => {
  const theme = useContext(ThemeContext);
  return (
    <p
      className="panama"
      style={{
        fontSize: 200,
        lineHeight: "111px",
        margin: 0,
        marginTop: "38px",
        color: props.color || theme.text.white,
      }}
    >
      {props.children}
    </p>
  );
};
