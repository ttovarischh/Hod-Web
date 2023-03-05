import React from "react";

interface TextProps {
  children: React.ReactNode;
  color: string;
}

export const HeaderFooter = (props: TextProps) => {
  return (
    <p className="PPMeduim" style={{ fontSize: 16, lineHeight: "19px", margin: 0, color: props.color }}>
      {props.children}
    </p>
  );
};

export const Panama = (props: TextProps) => {
    return (
      <p className="Panama" style={{ position: "absolute", top: 0, left: 0, fontSize: 200, lineHeight: "171px", margin: 0, color: props.color }}>
        {props.children}
      </p>
    );
};

export const Large = (props: TextProps) => {
    return (
      <p className="PPbook" style={{ zIndex: 100, fontSize: 40, lineHeight: "39px", margin: 0, color: props.color }}>
        {props.children}
      </p>
    );
};

export const Note = (props: TextProps) => {
    return (
      <p className="PPbook" style={{ fontSize: 24, lineHeight: "23px", margin: 0, color: props.color }}>
        {props.children}
      </p>
    );
};