import {useState} from 'react';

const Home = () => {
    const[blogs, setBlogs] =useState([
        {title: 'Potions and Puberty', body: 'lorem ipsum...', author: 'Harry Potter', id: 1},
        {title: 'Welcome to Hogwarts', body: 'lorem ipsum...', author: 'Albus Dumbledore', id: 2},
        {title: 'Slytherin into her DMs', body: 'lorem ipsum...', author: 'Severus Snape', id: 3}
    ]);
    return ( 
        <div className="Home">
        {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
            </div>

        ))}

        </div>
     );
}
 //scf 
export default Home;

