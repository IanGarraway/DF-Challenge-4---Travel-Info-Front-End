# AI Usage breakdown document

## Image Generation

windows copilot used to generate the Digital Futures Travel logo

## Data Generation

### Regex for passwords

prompt: can you create the regex expression for a password which is at least 8 characters in length, has a mix of uppercase and lower case letters, at least 1 number, and at least 1 special character

chatgpt response:

Certainly! Below is a regular expression (regex) for a password that meets the following criteria:

- At least 8 characters in length
- Contains both uppercase and lowercase letters
- Contains at least one number
- Contains at least one special character

Here is the regex pattern:

```
^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
```

Explanation:
- `^` asserts the position at the start of the string.
- `(?=.*[a-z])` ensures there is at least one lowercase letter.
- `(?=.*[A-Z])` ensures there is at least one uppercase letter.
- `(?=.*\d)` ensures there is at least one digit.
- `(?=.*[@$!%*?&])` ensures there is at least one special character from the set `@$!%*?&`.
- `[A-Za-z\d@$!%*?&]{8,}` matches any character in the set `A-Z`, `a-z`, `0-9`, and the specified special characters, with a minimum length of 8.
- `$` asserts the position at the end of the string.

This pattern ensures that the password contains all the required elements and is at least 8 characters long.

## Error Resolution

### Background image on home page

Had an issue with the background image only taking up a small part of the space.

#### prompt

this component: import { Form } from "react-bootstrap";
//import Button from "react-bootstrap"

import "./css/HomePage.css"

const HomePage = () => {
    return (
        <>
            <div className="home">
            
                <Form.Group className="mb-3" >
                    <Form.Label column="lg" lg={2}>Tell me about...</Form.Label>
                    <Form.Control type="String" placeholder="Location name..." />
                </Form.Group>
            </div>
        </>
    
    )
}

export default HomePage;
 with this css: .home{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-self: center;
    padding-top: 5%;
    background-image: url("../../images/pexels-hammyx-941459.jpg");
    background-position: center;
    background-size: cover;
    opacity: 0.3;
} is only using about 1/3 of the space I want it to fill. There is a header and footer set to take up the top and the bottom

#### response

To ensure that the `HomePage` component fills the available space between your header and footer, you'll need to adjust the CSS and possibly the layout of your application to ensure that the `HomePage` div expands to fill the remaining height. Here’s a possible approach:

1. **Ensure that the parent container has a defined height**: The parent container should have a height set to 100% or to the available viewport height minus the header and footer heights.

2. **Adjust the CSS for the `.home` class**: Ensure that the `.home` class is set to occupy the full height of its parent container.

3. **Check the structure of the HTML**: Ensure that the `Header`, `Footer`, and `HomePage` components are structured in a way that allows `HomePage` to fill the available space.

Here's an example of how you could adjust your code:

### CSS
Adjust your CSS to make sure the `home` class fills the available space:

```css
/* Ensure the root element and body take full height */
html, body {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
}

#root {
    display: flex;
    flex-direction: column;
    height: 100%;
}

/* Container for the main content, between the header and footer */
.content {
    flex: 1;
    display: flex;
}

.home {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-self: center;
    padding-top: 5%;
    background-image: url("../../images/pexels-hammyx-941459.jpg");
    background-position: center;
    background-size: cover;
    opacity: 0.3;
}
```

### React Component
Ensure that your component structure is set up correctly:

```jsx
import React from 'react';
import { Form } from 'react-bootstrap';
import './css/HomePage.css';

const HomePage = () => {
    return (
        <div className="content">
            <div className="home">
                <Form.Group className="mb-3">
                    <Form.Label column="lg" lg={2}>Tell me about...</Form.Label>
                    <Form.Control type="text" placeholder="Location name..." />
                </Form.Group>
            </div>
        </div>
    );
};

export default HomePage;
```

### Main App Component
Ensure the layout includes `Header`, `Footer`, and the main content area correctly:

```jsx
import React from 'react';
import HomePage from './HomePage';
import Header from './Header';
import Footer from './Footer';

const App = () => {
    return (
        <>
            <Header />
            <HomePage />
            <Footer />
        </>
    );
};

export default App;
```

With these adjustments, the `HomePage` component should fill the available space between the header and footer. The key changes are ensuring the parent containers (`html`, `body`, and `#root`) take the full height and using flex properties to make the content fill the remaining space.
