import React, { useState } from 'react'
import productData from '../../products.json';
import { Link } from 'react-router-dom';
import SelectedCategory from '../SelectedCategory.jsx/SelectedCategory';
import { Helmet } from 'react-helmet';

const title = (
    <h2>Search for a product</h2>
)
const desc = "We have all the accessories that you need";
const bannerList = [
    {
        iconName: "icofont-users-alt-4",
        text: "1.5 Million Customers",
    },
    {
        iconName: "icofont-notification",
        text: "More then 2000 Marchent",
    },
    {
        iconName: "icofont-globe",
        text: "Buy Anything Online",
    },
];

const Banner = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(productData);

    // filtering functions 
    const handleSearch = e => {
        const searchTerm = e.target.value;
        setSearchInput(searchTerm);

        //filtering the products based on the search
        const filtered = productData.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))

        setFilteredProducts(filtered);
    }

  return (
    <div className='banner-section style-4' id='banner'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MTC - Homepage</title>
                <meta name='description' content='MC Telecoms - Inspired by you for you.  delivering you the lastest gadgets at affordable prices.' />
                <link rel="canonical" href="#" />
            </Helmet>
       <div className='container'>
            <div className='banner-content'>
                {title}
                <form className=''>
                    {/* <SelectedCategory select={'all'}/> */}
                    <input type='text' className='p-4' name='search' id='search' placeholder='search for a product' value={searchInput} onChange={handleSearch}/>
                    {/* <button type='submit'>
                    <i className="icofont-search"></i>
                    </button> */}
                </form>
                <p>{desc}</p>
                <ul className='lab-ul'>
                    {
                        searchInput && filteredProducts.map((product, i) => <li key={i}>
                            <Link to={`/shop/${product.id}`}>{product.name}</Link>
                        </li>)
                    }
                </ul>
            </div>
       </div>
    </div>
  )
}

export default Banner
