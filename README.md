# react-typography-components
Contains reusable typography components that are responsive and flexible. 


## Tailwind.config.js
Add this to your tailwind configuration file.

```
  module.exports = {
   ...,
   theme: {
    fontFamily: {
     sans: ["", "sans-serif"],
     serif: ["", "serif"],
     mono: ["", "mono"],
    },
 
    extend: {
      fontSize: {
       "110px": "110px",
       "72px": "72px",
       "64px": "64px",
       "54px": "54px",
       "42px": "42px",
       "36px": "36px",
       "32px": "32px",
       "28px": "28px",
       "24px": "24px",
       "22px": "22px",
       "20px": "20px",
       "18px": "18px",
       "16px": "16px",
       "14px": "14px",
      },
 
      lineHeight: {
       1: "100%",
       1.1: "110%",
       1.2: "120%",
       1.3: "130%",
       1.4: "140%",
       1.5: "150%",
      },
 
      letterSpacing: {
       0: "0%",
       1: "1%",
       2: "2%",
       3: "3%",
      },
    },
   ...
  }
```

## Usage
Every components has props that can modify some its predefined styling.

| Props             | Description |
| ----------------- | ----------- |
| ```children```    | Expects text content or other nested tags |
| ```fontStyle```   | Overrides the default the set sans-serif and serif style |
| ```fontWeight```  | Overrides the default font weight of bold, semibold, medium, or regular |
| ```colors```      | Expects text color and background color of the text. This props can also hold you custom dark mode class |
| ```otherStyles``` | Appended at the end of the class prop where you can add additional class stylings |
| ```...rest```     | The ```...rest``` props are spread out on the parent tag (e.g., h1, h2, h3, p, and caption). This prop may contain props such as an ```onClick``` event. |

### Example

```
import React from 'react';

const App = () => {
  return (
    <div>
      <header>
        <nav>...</nav>
        ...
      </header>
      
      <section>
        <Headline onClick={() => alert("Welcome back, User!")}>Welcome Back!</Headline>
        <Subhead>User account</Subhead>
        
        <Body>
          ...
        </Body>
      <section>
      
      <footer>
        ...
      </footer>
    </div>
  )
}
```

## Components

1. Super Headline 
2. Headline
3. Subhead
4. Mini Head
5. Body Large
6. Body
7. Technical

### Long Format
1. LF Head
2. LF Subhead
3. LF Mini Head
4. LF Body

### Other Typographies
1. Caption
2. Pullquote
3. Blockquote

