import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const[blogs, setBlogs] =useState([
        {title: 'Potions and Puberty', body: 'lorem ipsum...', author: 'Harry Potter', id: 1},
        {title: 'Welcome to Hogwarts', body: 'lorem ipsum...', author: 'Albus Dumbledore', id: 2},
        {title: 'Slytherin into her DMs', body: 'lorem ipsum...', author: 'Severus Snape', id: 3}
    ]);
    return ( 
        <div className="Home">
        <BlogList blogs ={blogs} title="All Blogs"/>

        </div>
     );
}
 //scf 
export default Home;

