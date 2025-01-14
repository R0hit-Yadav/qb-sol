/*===>QB-353
Build basic react app that display “Hello World” in browser*/
/*App.js */
import React from 'react';

function App() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

export default App;


/*===>QB-354
Create an ReactJS app which shows the how to pass and read data using props*/
import React from 'react';

function Greeting(props) {
    return (
        <div>
            <h2>{props.message}</h2>
        </div>
    );
}
export default Greeting;


import React from 'react';
import Greeting from './Greeting';

function App() {
    const greetingMessage = "Hello from Props!";

    return (
        <div>
            <h1>Passing and Reading Props in React</h1>
            <Greeting message={greetingMessage} />
        </div>
    );
}

export default App;



/*===>QB-355
Write a React code to print car’s brand name and its model name which are passed as props using JSON*/

import React from 'react';
function Car(props) {
    return (
        <div>
            <h2>Car Brand: {props.car.brand}</h2>
            <h3>Car Model: {props.car.model}</h3>
        </div>
    );
}
export default Car;


import React from 'react';
import Car from './Car';

function App() {
    const carData = 
    {
        brand: "Toyota",
        model: "Corolla"
    };

    return (
        <div>
            <h1>Car Information</h1>
            <Car car={carData} />
        </div>
    );
}

export default App;




/*===>QB-356
Write react js script to display alert box with text “Welcome to LJU” by clicking on button. */
import React from 'react';

function App() {
    const showAlert = () => 
    {
        alert("Welcome to LJU");
    };

    return (
        <div>
            <h1>Alert Box Example</h1>
            <button onClick={showAlert}>Click Me</button>
        </div>
    );
}
export default App;




/*===>QB-357
Write react js script to display values in console while changing it in text box*/
import React, { useState } from 'react';

const TextInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    console.log(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  );
};
export default TextInput;

import React from 'react';
import TextInput from './TextInput';

const App = () => {
  return (
    <div>
      <h1>Type in the Text Box</h1>
      <TextInput />
    </div>
  );
};
export default App;



/*===>QB-358
Write react js script to display alert box with text “welcome to lju” only on double click button*/
import React from 'react';

const WelcomeButton = () => {
  const handleDoubleClick = () => {
    alert('Welcome to LJU');
  };

  return (
    <div>
      <button onDoubleClick={handleDoubleClick}>Double Click Me</button>
    </div>
  );
};

export default WelcomeButton;


import React from 'react';
import WelcomeButton from './WelcomeButton';

const App = () => {
  return (
    <div>
      <h1>Double Click the Button</h1>
      <WelcomeButton />
    </div>
  );
};

export default App;




/*===>QB-359
Create react js app to display all array elements in h2 tag using map function*/
import React from 'react';

const App = () => {
  const elements = ['Element 1', 'Element 2', 'Element 3', 'Element 4'];

  return (
    <div>
      {elements.map((element, index) => (
        <h2 key={index}>{element}</h2>
      ))}
    </div>
  );
};

export default App;



/*===>QB-360
Write a program to create ReactJS application having an array of strings and convert it in Uppercase using MAP method. */
import React from 'react';

const App = () => {
  const strings = ['hello', 'world', 'react', 'js'];
  const uppercasedStrings = strings.map(str => str.toUpperCase());
  return (
    <div>
      <h1>Uppercased Strings</h1>
      {uppercasedStrings.map((str) => (
        <h2>{str}</h2>
      ))}
    </div>
  );
};

export default App;



/*===>QB-361
We have an array of numbers and we want to multiply each of these numbersby 5. 
Create react js app to display these multiplied numbers using map function.*/
import React from 'react';

const App = () => {

  const numbers = [1, 2, 3, 4, 5];
  const multipliedNumbers = numbers.map(num => num * 5);

  return (
    <div>
      <h1>Multiplied Numbers</h1>
      {multipliedNumbers.map((num) => (
        <h2>{num}</h2>
      ))}
    </div>
  );
};

export default App;



/*===>QB-362
Create react app which displays 3 images using map function*/
import React from 'react';

const App = () => {
  const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
  ];

  return (
    <div>
      <h1>Image Gallery</h1>
      <div>
        {images.map((image) => (
          <img
            src={image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;





/*===>QB-363
Write a ReactJS code in which we have apply filter to skip digit “3” from the array of 1 to 5 and
display all remaining digits of the array. */
import React from 'react';

const FilterArrayComponent = () => {

  const numbers = [1, 2, 3, 4, 5];

  const filteredNumbers = numbers.filter(num => num !== 3);
  return (
    <div>
      <h1>Filtered Numbers</h1>
      <ul>
        {filteredNumbers.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </div>
  );
};
export default FilterArrayComponent;

import React from 'react';
import FilterArrayComponent from './FilterArrayComponent';
const App = () => {
  return (
    <div>
      <FilterArrayComponent />
    </div>
  );
};

export default App;




/*===>QB-364
Create react app to perform tasks as asked.
First create files as asked below in routing folder
1. Home.js - for the home page content
2. Shop.js - for the shop page content
3. Contact.js - for the contact page content
4. Nopage.js - for the page other than mentioned links
Create Main.js file which contains Links for Home, Shop and Product page. Also, add functionality of
page routing.
Finally call Main.js in App.js.
*/
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  );
};
export default Home;

import React from 'react';
const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
      <p>Explore our products here!</p>
    </div>
  );
};
export default Shop;


import React from 'react';
const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Get in touch with us!</p>
    </div>
  );
};
export default Contact;

import React from 'react';
const Nopage = () => {
  return (
    <div>
      <h1>404 Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};
export default Nopage;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './routing/Home';
import Shop from './routing/Shop';
import Contact from './routing/Contact';
import Nopage from './routing/Nopage';

const Main = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
      </div>
    </Router>
  );
};
export default Main;


import React from 'react';
import Main from './Main';

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default App;





/*===>QB-365
Create React app to pass student name, roll number, t1 marks and t2 marks of 2 students to component
and read the information and display in table format. Use Props*/
import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Roll Number</th>
          <th>Term 1 Marks</th>
          <th>Term 2 Marks</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr>
            <td>{student.name}</td>
            <td>{student.rollNumber}</td>
            <td>{student.t1Marks}</td>
            <td>{student.t2Marks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default StudentTable;

import React from 'react';
import StudentTable from './StudentTable';

const App = () => {
  const students = [
    { name: 'rohit', rollNumber: '1', t1Marks: 85, t2Marks: 90 },
    { name: 'yash', rollNumber: '2', t1Marks: 78, t2Marks: 82 }
  ];
  return (
    <div>
      <h1>Student Information</h1>
      <StudentTable students={students} />
    </div>
  );
};
export default App;


/*===>QB-366
Create react app and use routing functionality of react to perform the tasks as asked.
Create one file named Main.js which contains links for home and about page and routing functionality.
In Home.js file add one image and heading(h1) "LJ University"
In About.js file add branch list (CSE,IT,CE). 
*/
import React from 'react';
import universityImage from './university.jpg'; 

const Home = () => {
  return (
    <div>
      <h1>LJ University</h1>
      <img src={universityImage} alt="LJ University" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};
export default Home;


import React from 'react';
const About = () => {
  const branches = ['CSE', 'IT', 'CE'];

  return (
    <div>
      <h1>About Us</h1>
      <ul>
        {branches.map((branch) => (
          <li>{branch}</li>
        ))}
      </ul>
    </div>
  );
};
export default About;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';

const Main = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;


import React from 'react';
import Main from './Main';


const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default App;




/*===>QB-367
Write a ReactJS code in which we have apply filter to skip digits which are less than “10” from the
array and display all remaining digits of the array [3,5,11,4,17,8,21,2,26,13,8]. */
import React from 'react';

const App = () => {

  const numbers = [3, 5, 11, 4, 17, 8, 21, 2, 26, 13, 8];
  const filteredNumbers = numbers.filter(num => num >= 10);

  return (
    <div>
      <h1>Filtered Numbers</h1>
      <ul>
        {filteredNumbers.map((num) => (
          <li>{num}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;




/*===>QB-368
Create React app to pass color(red), background color(yellow), font size(25px) and font style(italic) as
properties to component and apply css to "Lj Students" text written in p tag. use Props*/
import React from 'react';

const StyledText = ({ color, backgroundColor, fontSize, fontStyle }) => {
  const style = {
    color: color,
    backgroundColor: backgroundColor,
    fontSize: fontSize,
    fontStyle: fontStyle,
  };

  return (
    <p style={style}>Lj Students</p>
  );
};
export default StyledText;

import React from 'react';
import StyledText from './StyledText';


const App = () => {
  return (
    <div>
      <h1>Styled Text Example</h1>
      <StyledText color="red" backgroundColor="yellow" fontSize="25px" fontStyle="italic"/>
    </div>
  );
};

export default App;




/*===>QB-369
Write react js script to perform the tasks as asked below.
Add an array of objects which contains name and age of people.
Apply filter to find people with age less than 40. And display name of all people using map function. 
*/
import React from 'react';

const App = () => {
  const people = [
    { name: 'yash', age: 29 },
    { name: 'rohit', age: 35 },
    { name: 'dev', age: 42 },
    { name: 'parth', age: 38 },
    { name: 'vansh', age: 31 }
  ];

  const filteredPeople = people.filter(person => person.age < 40);
  return (
    <div>
      <h1>People Under 40</h1>
      <ul>
        {filteredPeople.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;




/*===>QB-370
Write react js script to perform the tasks as asked below.
Add an array of objects which contains name and branch(CSE,IT,CE) of students.
Apply filter to find students who are from CSE branch. And display name of all studens of CSE branch
using map function*/
import React from 'react';

const App = () => {
  const students = [
    { name: 'rohit', branch: 'CSE' },
    { name: 'dev', branch: 'IT' },
    { name: 'yash', branch: 'CSE' },
    { name: 'ganpat', branch: 'CE' },
    { name: 'parth', branch: 'CSE' }
  ];

  const cseStudents = students.filter(student => student.branch === 'CSE');

  return (
    <div>
      <h1>CSE Students</h1>
      <ul>
        {cseStudents.map((student) => (
          <li>{student.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;




/*===>QB-371
Create react app and use routing functionality of react to perform the tasks as asked.
Create one file named Main.js which contains links for React Js, Node Js and Express Js and routing
functionality.
Create components for each links and add heading "React JS","Node JS" and "Express JS" in
component files Ex1.js, Ex2.js and EX3.js respectively. 
*/
import React from 'react';

const Ex1 = () => {
  return (
    <div>
      <h1>React JS</h1>
    </div>
  );
};
export default Ex1;

import React from 'react';

const Ex2 = () => {
  return (
    <div>
      <h1>Node JS</h1>
    </div>
  );
};

export default Ex2;


import React from 'react';

const Ex3 = () => {
  return (
    <div>
      <h1>Express JS</h1>
    </div>
  );
};

export default Ex3;



import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Ex1 from './Ex1';
import Ex2 from './Ex2';
import Ex3 from './Ex3';

const Main = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/react-js">React JS</Link>
            </li>
            <li>
              <Link to="/node-js">Node JS</Link>
            </li>
            <li>
              <Link to="/express-js">Express JS</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/react-js" element={<Ex1 />} />
          <Route path="/node-js" element={<Ex2 />} />
          <Route path="/express-js" element={<Ex3 />} />
          <Route path="*" element={<div><h1>404 Not Found</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default Main;

import React from 'react';
import Main from './Main';

const App = () => {
  return (
    <div>
      <Main />
    </div>
  );
};

export default App;




/*===>QB-372
Create react app to pass product image, name and price as properties from one component to another
component. Add an array of objects with pic, name and price properties of 2 products. Display Image
name and price of the products in browser using map method. 
*/
import React from 'react';

const Product = ({ image, name, price }) => {
  return (
    <div>
      <img src={image} alt={name} style={{ width: '150px', height: '150px' }} />
      <h2>{name}</h2>
      <p>${price.toFixed(2)}</p>
    </div>
  );
};

export default Product;


import React from 'react';
import Product from './Product';

const ProductList = () => {
  const products = [
    {
      pic: 'https://via.placeholder.com/150',
      name: 'Product 1',
      price: 29.99
    },
    {
      pic: 'https://via.placeholder.com/150',
      name: 'Product 2',
      price: 39.99
    }
  ];

  return (
    <div>
      <h1>Product List</h1>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
        {products.map((product) => (
          <Product image={product.pic} name={product.name} price={product.price}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;


import React from 'react';
import ProductList from './ProductList';


const App = () => {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
};

export default App;



/*===>QB-373
Create react app using function component to pass background color(green), font size(50px) font
style(italic),text transform(uppercase) as properties to Example .js component and apply css to “This is
an React Application” text written in h1 tag in Example2.js component. */
import React from 'react';

const Example = ({ backgroundColor, fontSize, fontStyle, textTransform }) => {
  const style = {
    backgroundColor: backgroundColor,
    fontSize: fontSize,
    fontStyle: fontStyle,
    textTransform: textTransform,
  };

  return (
    <div style={style}>
      <h1>This is a React Application</h1>
    </div>
  );
};

export default Example;

import React from 'react';
import Example from './Example';

const Example2 = () => {
  return (
    <div>
      <Example backgroundColor="green" fontSize="50px" fontStyle="italic" textTransform="uppercase"/>
    </div>
  );
};
export default Example2;

import React from 'react';
import Example2 from './Example2';

const App = () => {
  return (
    <div>
      <Example2 />
    </div>
  );
};
export default App;




/*===>QB-374
Create react app using function component to perform tasks as asked.
First create files as asked below in folder named “ component”
1. Login.js - for the login page content
2. Product.js - for the Product page content
3. Contact.js - for the contact page content
4. About.js - for the about page content
Create Home.js file which contains Links for Login,Product,Contact and About page. Also, add
functionality of page routing.
Finally call Home.js in App.js.
Write code for All necessary files*/

import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Welcome to the login page. Please enter your credentials.</p>
    </div>
  );
};

export default Login;


import React from 'react';

const Product = () => {
  return (
    <div>
      <h1>Product Page</h1>
      <p>Here is where you can browse and select products.</p>
    </div>
  );
};

export default Product;


import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Get in touch with us through this page.</p>
    </div>
  );
};

export default Contact;


import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about our company and team on this page.</p>
    </div>
  );
};

export default About;


import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './components/Login';
import Product from './components/Product';
import Contact from './components/Contact';
import About from './components/About';

const Home = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<div><h1>404 Not Found</h1></div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default Home;

import React from 'react';
import Home from './Home';

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default App;




/*===>QB-375
Write a react.js file to pass an integer value to a component, which is defined as a property in
app.js file. Fetch that value in component and print its table on console. Write all necessary
files i.e. App.js and Component.js. Perform task by function component*/
import React, { useEffect } from 'react';

const Component = ({ number }) => {
  useEffect(() => {
    const printTable = (num) => {
      console.log(`Multiplication table for ${num}:`);
      for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
      }
    };

    printTable(number);
  }, [number]);

  return (
    <div>
      <h1>Check the console for the multiplication table of {number}</h1>
    </div>
  );
};

export default Component;

import React from 'react';
import Component from './Component';

const App = () => {
  const number = 7; 

  return (
    <div>
      <Component number={number} />
    </div>
  );
};

export default App;




/*===>QB-376
Write React JS script to display three products. Products having title, product image, price
and description. All three products should be horizontally adjacent to each other. Note: using
props show all products and use Functional component for complete this script.*/

import React from 'react';

const Product = ({ title, image, price, description }) => {
  return (
    <div>
      <img src={image} alt={title} style={styles.image} />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.price}>${price.toFixed(2)}</p>
      <p style={styles.description}>{description}</p>
    </div>
  );
};


export default Product;


import React from 'react';
import Product from './Product';

const ProductList = () => {
  const products = [
    {
      title: 'Product 1',
      image: 'https://via.placeholder.com/300',
      price: 29.99,
      description: 'This is a great product 1.'
    },
    {
      title: 'Product 2',
      image: 'https://via.placeholder.com/300',
      price: 39.99,
      description: 'This is a great product 2.'
    },
    {
      title: 'Product 3',
      image: 'https://via.placeholder.com/300',
      price: 49.99,
      description: 'This is a great product 3.'
    }
  ];

  return (
    <div>
      {products.map((product) => (
        <Product title={product.title} image={product.image} price={product.price} description={product.description}/>
      ))}
    </div>
  );
};
export default ProductList;

import React from 'react';
import ProductList from './ProductList';

const App = () => {
  return (
    <div>
      <h1>Our Products</h1>
      <ProductList />
    </div>
  );
};
export default App;




/*===>QB-377
Implement a character counter that displays the number of characters entered in a textarea input.*/
import React, { useState } from 'react';
const CharacterCounter = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <textarea value={text} onChange={handleChange} rows="10" cols="50"/>
      <div>
        Characters: {text.length}
      </div>
    </div>
  );
};
export default CharacterCounter;


import React from 'react';
import CharacterCounter from './CharacterCounter';

const App = () => {
  return (
    <div>
      <h1>Character Counter</h1>
      <CharacterCounter />
    </div>
  );
};

export default App;




/*===>QB-378
Write react js script to perform the tasks as asked below using functional component:
1)Add an array of objects which contains name and age of people.
2)Apply filter to find people with age less than 40. And display name of all people using map function*/
import React from 'react';

const PeopleList = () => {
  const people = [
    { name: 'Yadav Rohit', age: 28 },
    { name: 'Parekh yash', age: 34 },
    { name: 'Patel Dev', age: 42 },
    { name: 'doshi jay', age: 25 },
    { name: 'patel parth', age: 30 }
  ];

  const filteredPeople = people.filter(person => person.age < 40);
  return (
    <div>
      <h1>People under 40</h1>
      <ul>
        {filteredPeople.map((person) => (
          <li>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;

import React from 'react';
import PeopleList from './PeopleList';

const App = () => {
  return (
    <div>
      <PeopleList />
    </div>
  );
};

export default App;



/*===>QB-379
Create a React app to perform tasks as asked using functional component:
1)Create a react Router that includes three routes: Home, Product, and Contact and implement
navigation between these routes. 
2)Create a route that displays a Home page, Product details
page and Contact details page.
3) When a user clicks on Home page it should navigate to
home page and display “Welcome to LJU” in bold in h1 heading. When a user clicks on a
Product page, it should navigate to the product detail page and display three products
information with price and description using props. And when user clicks on Contact page it
should navigate to contact details page and display contact information with blue color font.*/

// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to LJU</h1>
    </div>
  );
};

export default Home;


// src/components/Product.js
import React from 'react';

const Product = ({ title, price, description }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

const ProductList = () => {
  const products = [
    { title: 'Product 1', price: 29.99, description: 'This is a great product.' },
    { title: 'Product 2', price: 39.99, description: 'This is another great product.' },
    { title: 'Product 3', price: 49.99, description: 'This is yet another great product.' }
  ];

  return (
    <div>
      <h1>Product Details</h1>
      {products.map((product) => (
        <Product title={product.title} price={product.price} description={product.description}/>
      ))}
    </div>
  );
};

export default ProductList;


// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Information</h1>
      <p>Email:rohitkyadav2312@gmail.com</p>
      <p>Phone: 9173697510</p>
    </div>
  );
};

export default Contact;


// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ProductList from './components/Product';
import Contact from './components/Contact';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/product">Product</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductList />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;





/*===>QB-380
Write a program to create function based ReactJS app having an array of 6 people having
mentioned age [70,83,38,65,49,94] and display list of people whose age is greater than 60
using filter method. Also display total count of people whose age is greater than 60 on the
same page. */

import React from 'react';

const AgeFilter = () => {
  const people = [
    { name: 'rohit', age: 70 },
    { name: 'jay', age: 83 },
    { name: 'yash', age: 38 },
    { name: 'dev', age: 65 },
    { name: 'labh', age: 49 },
    { name: 'vansh', age: 94 }
  ];

  const filteredPeople = people.filter(person => person.age > 60);

  return (
    <div>
      <h1>People Aged Greater Than 60</h1>
      <ul>
        {filteredPeople.map((person) => (
          <li>{person.name} - {person.age} years</li>
        ))}
      </ul>
      <div>
        <h2>Total Count: {filteredPeople.length}</h2>
      </div>
    </div>
  );
};

export default AgeFilter;


import React from 'react';
import AgeFilter from './AgeFilter';

const App = () => {
  return (
    <div>
      <AgeFilter />
    </div>
  );
};

export default App;




/*===>QB-381
Create a React function component named File1 that receives two props, productName and
price. The component should display the product name and price. Additionally, add a button
labeled "Add to cart" to the component. When the button is clicked onClick event triggered
and an alert should be displayed with the message "Your Product is Added to cart!". 
*/

import React from 'react';

const File1 = ({ productName, price }) => {
  const handleAddToCart = () => {
    alert('Your Product is Added to cart!');
  };

  return (
    <div>
      <h2>{productName}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      <button onClick={handleAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default File1;


import React from 'react';
import File1 from './File1';

const App = () => {
  return (
    <div>
      <h1>Product List</h1>
      <File1 productName="Laptop" price={999.99} />
      <File1 productName="Smartphone" price={499.99} />
      <File1 productName="Headphones" price={199.99} />
    </div>
  );
};

export default App;




/*===>QB-382
Write react js script to perform the task as below using function component:
•Create array of objects which have id, name & city of person.
•Display id & name of persons having city name “Ahmedabad” by using map function.
No need to write App.js file.*/

import React from 'react';
const PersonsList = () => {
  const persons = [
    { id: 1, name: 'Yadav Rohit', city: 'Ahmedabad' },
    { id: 2, name: 'parekh yash', city: 'Mumbai' },
    { id: 3, name: 'patel dev', city: 'Ahmedabad' },
    { id: 4, name: 'patel parth', city: 'Delhi' },
    { id: 5, name: 'gadani panth', city: 'Ahmedabad' }
  ];

  const personsInAhmedabad = persons.filter(person => person.city === 'Ahmedabad').map(person => (
      <li>
        ID: {person.id}, Name: {person.name}
      </li>
    ));

  return (
    <div>
      <h1>Persons from Ahmedabad</h1>
      <ul>
        {personsInAhmedabad}
      </ul>
    </div>
  );
};

export default PersonsList;


import React from 'react';
import PersonsList from './PersonsList';

const App = () => {
  return (
    <div>
      <PersonsList />
    </div>
  );
};

export default App;
