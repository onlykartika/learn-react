import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

const BookList = () => {
  return <section className='booklist'>
    <Book/>
    <Book/>
    <Book/>
  </section>
}

const Book = () => {
  return <article className='book'>
    <Image/>
    <Title/>
    <Author/>

  </article>
}


const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71aNoZYvEhL._AC_UL600_SR600,400_.jpg" alt="Good Energy"></img>
const Title = () => <h2>Good Energy</h2>
const Author = () => { return <h4>Casey Means</h4> }

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);