import React, { useState } from 'react';
import PageHeader from '../PageHeader/PageHeader';
import Data from '../../products.json';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import Search from './Search';

const showResults = "Showing 01 - 12 of 139 results"

const Shop = () => {
  const [gridList, setGridList] = useState(true);
  const [products, setProducts] = useState(Data);


  // for the pagination 
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div>
        <PageHeader title="Our Shop Page" curPage='Shop'/>
        {/* the shop page */}
        <div className='shop-page'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-lg-8 col-12'>
                  <article>
                    {/* laytout and title  */}
                    <div className='shop-title d-flex flex-wrap justify-content-between'>
                      <p>{showResults}</p>
                      <div className={`product-view-mode ${gridList ? 'gridActive' : 'listActive'}`}>
                        <a className='grid' onClick={(() => setGridList(!gridList))}>
                          <i className='icofont-ghost'></i>
                        </a>
                        <a className='list' onClick={(() => setGridList(!gridList))}>
                          <i className='icofont-listine-dots'></i>
                        </a>
                      </div>
                    </div>
                    {/* the products cards  */}
                    <div className=''>
                      <ProductCard gridList={gridList} products={currentProducts}/>
                    </div>
                    <Pagination 
                      productsPerPage={productsPerPage} 
                      totalProducts={products.length} 
                      paginate={paginate}
                      activePage={currentPage}
                      />
                  </article>
              </div>
              <div className='col-lg-4 col-12'>
                  <aside>
                    <Search products={products} gridList={gridList}/>
                  </aside>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Shop
