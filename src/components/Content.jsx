import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

class Content extends Component{
   render(){
       return (
           <div>

               <ul className="blogs">
               
                   <li className="blog-items">
                       <span className="datePosted">December 16, 2020</span>
                       <Link  to='/blogs/next-for-vercel'>
                            <a className="blog" href="/blogs/next-for-vercel">Next for Vercel</a>
                       </Link>
                   </li>
                

                
                   <li className="blog-items">
                       <span className="datePosted">August 2, 2020</span>
                       <Link to='/blogs/books-people-reread'>
                            <a className="blog" href="/blogs/books-people-reread">Books people re(read)</a>
                       </Link>
                   </li>
                

                
                   <li className="blog-items">
                       <span className="datePosted">June 11, 2020</span>
                       <Link to='/blogs/develop-preview-test'>
                            <a className="blog" href="/blogs/develop-preview-test">Develop, Preview, Test</a>
                        </Link>
                   </li>
                

                   <li className="blog-items">
                       <span className="datePosted">May 2, 2020</span>
                       <Link to='/blogs/static-hoisting'>
                            <a className="blog" href="/blogs/static-hoisting">Static Hoisting</a>
                       </Link>
                   </li>

                   <li className="blog-items">
                       <span className="datePosted">April 26, 2020</span>
                       <Link to='/blogs/an-ode-to-code-golf'>
                            <a className="blog" href="/blogs/an-ode-to-code-golf">An ode to code golf</a>
                       </Link>
                   </li>

                   <li className="blog-items">
                       <span className="datePosted">April 21, 2020</span>
                       <Link to='/blogs/vercel'>
                            <a className="blog" href="/blogs/vercel">Vercel</a>
                       </Link>
                   </li>

                   <li className="blog-items">
                       <span className="datePosted">January 2, 2020</span>
                       <Link to='/blogs/2019-in-review'>
                            <a className="blog" href="/blogs/2019-in-review">2019 in review</a>
                       </Link>
                   </li>

                   <li className="blog-items">
                       <span className="datePosted">March 28, 2017</span>
                       <Link to='/blogs/its-hard-to-forego-efficiency'>
                            <a className="blog" href="/blogs/its-hard-to-forego-efficiency">It's hard to forego efficiency</a>
                       </Link>
                   </li>

                   <li className="blog-items">
                       <span className="datePosted">January 6, 2017</span>
                       <Link to='/blogs/2016-in-review'>
                            <a className="blog" href="/blogs/2016-in-review">2016 in review</a>
                       </Link>
                   </li>

                   <li className="blog-items">
                       <span className="datePosted">February 4, 2016</span>
                       <a className="blog" href="/blogs/addressable-errors">Addressable errors</a>
                   </li>

                   <li className="blog-items">
                       <span className="datePosted">July 13, 2015</span>
                       <Link to='/blogs/pure-ui'>
                            <a className="blog" href="/blogs/pure-ui">Pure UI</a>
                       </Link>
                   </li>

                   <li className="blog-items">
                       <span className="datePosted">February 25, 2015</span>
                       <Link to='/blogs/ecmascript-6'>
                            <a className="blog" href="/blogs/ecmascript-6">ECMAScript 6</a>
                       </Link>
                   </li>

                   <li className="blog-items">
                       <span className="datePosted">November 4, 2014</span>
                       <Link to='/blogs/7-principles-of-rich-web-applications'>
                            <a className="blog" href="/blogs/7-principles-of-rich-web-applications">7 principles of Rich Web Applications</a>
                       </Link>
                   </li>
               </ul>

           </div>
       );
   }

}

export default Content;