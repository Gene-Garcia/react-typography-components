import React from "react";

/*
 * Tailwind.config.js
 *
 * module.exports = {
 *  ...,
 *  theme: {
 *   fontFamily: {
 *    sans: ["", "sans-serif"],
 *    serif: ["", "serif"],
 *    mono: ["", "mono"],
 *   },
 *
 *   extend: {
 *     fontSize: {
 *      "110px": "110px",
 *      "72px": "72px",
 *      "64px": "64px",
 *      "54px": "54px",
 *      "42px": "42px",
 *      "36px": "36px",
 *      "32px": "32px",
 *      "28px": "28px",
 *      "24px": "24px",
 *      "22px": "22px",
 *      "20px": "20px",
 *      "18px": "18px",
 *      "16px": "16px",
 *      "14px": "14px",
 *     },
 *
 *     lineHeight: {
 *      1: "100%",
 *      1.1: "110%",
 *      1.2: "120%",
 *      1.3: "130%",
 *      1.4: "140%",
 *      1.5: "150%",
 *     },
 *
 *     letterSpacing: {
 *      0: "0%",
 *      1: "1%",
 *      2: "2%",
 *      3: "3%",
 *     },
 *   },
 *  ...
 * }
 *
 */

const SuperHeadline = ({
  children,
  fontStyle = "font-serif",
  fontWeight = "font-bold",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <h1
      {...rest}
      className={`${fontStyle} ${fontWeight}
                text-64px md:text-72px lg:text-110px 
                leading-1 md:leading-1.1 
                tracking-3 
                ${colors}
                ${otherStyles}`}
    >
      {children}
    </h1>
  );
};

const Headline = ({
  children,
  fontStyle = "font-serif",
  fontWeight = "font-bold",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <h1
      {...rest}
      className={`${fontStyle} ${fontWeight}
                    text-42px md:text-54px lg:text-64px
                    leading-1.1 lg:leading-1
                    tracking-2
                    ${colors}
                    ${otherStyles}`}
    >
      {children}
    </h1>
  );
};

const Subhead = ({
  children,
  fontStyle = "font-sans",
  fontWeight = "font-semibold",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <h2
      {...rest}
      className={`${fontStyle} ${fontWeight}
                    text-32px lg:text-36px
                    leading-1.1
                    tracking-0
                    ${colors}
                    ${otherStyles}`}
    >
      {children}
    </h2>
  );
};

const MiniHead = ({
  children,
  fontStyle = "font-sans",
  fontWeight = "font-medium",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <h3
      {...rest}
      className={`${fontStyle} ${fontWeight}
                    text-22px
                    leading-1.3
                    tracking-0
                    ${colors}
                    ${otherStyles}`}
    >
      {children}
    </h3>
  );
};

const BodyLarge = ({
  children,
  fontStyle = "font-sans",
  fontWeight = "font-regular",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <p
      {...rest}
      className={`${fontStyle} ${fontWeight}
                    text-20px md:text-22px
                    leading-1.5 md:leading-1.3 
                    tracking-0 
                    ${colors}
                    ${otherStyles}`}
    >
      {children}
    </p>
  );
};

const Body = ({
  children,
  fontStyle = "font-sans",
  fontWeight = "font-regular",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <p
      {...rest}
      className={`${fontStyle} ${fontWeight}
                    text-16px md:text-18px
                    leading-1.3 md:leading-1.4
                    tracking-0
                    ${colors}
                    ${otherStyles}`}
    >
      {children}
    </p>
  );
};

const Technical = ({
  children,
  fontStyle = "font-sans",
  fontWeight = "font-regular",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <p
      {...rest}
      className={`${fontStyle} ${fontWeight}
                    text-14px
                    leading-1.5
                    tracking-2
                    ${colors}
                    ${otherStyles}`}
    >
      {children}
    </p>
  );
};

/*
 * Long Format Components
 *
 */

const LFHead = ({
  children,
  fontStyle = "font-serif",
  fontWeight = "font-bold",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <h1
      {...rest}
      className={`${fontStyle} ${fontWeight}
                    text-28px md:text-32px
                    leading-1.3 md:leading-1.2
                    tracking-0 
                    ${colors}
                    ${otherStyles}`}
    >
      {children}
    </h1>
  );
};

const LFSubhead = ({
  children,
  fontStyle = "font-serif",
  fontWeight = "font-semibold",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <h2
      {...rest}
      className={`${fontStyle} ${fontWeight}
                      text-24px
                      leading-1.3 
                      tracking-0 
                      ${colors}
                      ${otherStyles}`}
    >
      {children}
    </h2>
  );
};

const LFMiniHead = ({
  children,
  fontStyle = "font-sans",
  fontWeight = "font-medium",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <h3
      {...rest}
      className={`${fontStyle} ${fontWeight}
                      text-20px
                      leading-1.3
                      tracking-0 md:tracking-1
                      ${colors}
                      ${otherStyles}`}
    >
      {children}
    </h3>
  );
};

const LFBody = ({
  children,
  fontStyle = "font-sans",
  fontWeight = "font-regular",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <p
      {...rest}
      className={`${fontStyle} ${fontWeight}
                      text-18px
                      leading-1.5
                      tracking-0
                      ${colors}
                      ${otherStyles}`}
    >
      {children}
    </p>
  );
};

/*
 * Other Typographies
 *
 */

const Caption = ({
  children,
  fontStyle = "font-sans",
  fontWeight = "font-regular",
  colors = "text-black bg-white",
  otherStyles = "text-left",
  ...rest
}) => {
  return (
    <caption
      {...rest}
      className={`${fontStyle} ${fontWeight}
                      text-16px 
                      leading-1.5 
                      tracking-0 
                      ${colors}
                      ${otherStyles}`}
    >
      {children}
    </caption>
  );
};

const Pullquote = ({
  children,
  fontStyle = "font-sans",
  fontWeight = "font-regular",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <blockquote
      {...rest}
      className={`${fontStyle} ${fontWeight}
                      text-22px md:text-28px
                      leading-1.5 md:leading-1.3
                      tracking-0 
                      ${colors}
                      ${otherStyles}`}
    >
      {children}
    </blockquote>
  );
};

const Blockquoute = ({
  children,
  fontStyle = "font-sans italics",
  fontWeight = "font-regular",
  colors = "text-black bg-white",
  otherStyles = "",
  ...rest
}) => {
  return (
    <blockquote
      {...rest}
      className={`${fontStyle} ${fontWeight}
                    text-20px
                    leading-1.5
                    tracking-0
                    ${colors}
                    ${otherStyles}`}
    >
      {children}
    </blockquote>
  );
};

export {
  SuperHeadline,
  Headline,
  Subhead,
  MiniHead,
  BodyLarge,
  Body,
  Technical,
  LFHead,
  LFSubhead,
  LFMiniHead,
  LFBody,
  Caption,
  Pullquote,
  Blockquoute,
};
