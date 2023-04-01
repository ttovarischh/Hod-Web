import React from "react";
import { useContext } from "react";
import { ThemeContext } from 'styled-components'

interface TextProps {
  children: React.ReactNode;
  color?: string;
}

export const HeaderFooter = (props: TextProps) => {
  const theme = useContext(ThemeContext)
  return (
    <p className="PPMeduim" style={{ fontSize: 16, lineHeight: "19px", margin: 0, color: props.color || theme.text.white}}>
      {props.children}
    </p>
  );
};

export const CardText = (props: TextProps) => {
  const theme = useContext(ThemeContext)
  return (
    <p className="PPMeduim" style={{ fontSize: 18, lineHeight: "21px", margin: 0, color: props.color || theme.text.white}}>
      {props.children}
    </p>
  );
};

export const EffectText = (props: TextProps) => {
  const theme = useContext(ThemeContext)
  return (
    <p className="PPMeduim" style={{ fontSize: 20, lineHeight: "24px", margin: 0, color: props.color || "#A4A4AC"}}>
      {props.children}
    </p>
  );
};

export const Panama = (props: TextProps) => {
  const theme = useContext(ThemeContext)
    return (
      <p className="panama" style={{ position: "absolute", top: 0, left: 0, fontSize: 200, lineHeight: "171px", margin: 0, color: props.color || theme.text.panama }}>
        {props.children}
      </p>
    );
};

export const Big_Panama = (props: TextProps) => {
  const theme = useContext(ThemeContext)
    return (
      <p className="panama" style={{ fontSize: 200, lineHeight: "111px", margin: 0, marginTop: "38px", color: props.color || theme.text.white }}>
        {props.children}
      </p>
    );
};

export const Large = (props: TextProps) => {
  const theme = useContext(ThemeContext)
    return (
      <p className="ppbook" style={{ zIndex: 100, fontSize: 40, lineHeight: "39px", margin: 0, color: props.color || theme.text.white }}>
        {props.children}
      </p>
    );
};

export const Note = (props: TextProps) => {
  const theme = useContext(ThemeContext)
    return (
      <p className="ppbook" style={{ fontSize: 24, lineHeight: "23px", margin: 0, color: props.color || theme.text.white  }}>
        {props.children}
      </p>
    );
};

export const Breadcrumb = (props: TextProps) => {
  const theme = useContext(ThemeContext)
    return (
      <p className="ppmedium" style={{ fontSize: 14, lineHeight: "17px", opacity: 0.8, margin: 0, color: props.color || theme.text.grey }}>
        {props.children}
      </p>
    );
};

export const SuperSmallText = (props: TextProps) => {
  const theme = useContext(ThemeContext)
    return (
      <p className="ppmedium" style={{ fontSize: 11, lineHeight: "13px", margin: 0, color: props.color || "#A4A4AC" }}>
        {props.children}
      </p>
    );
};