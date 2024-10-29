import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { debounce } from 'lodash-es';

function ResultSearch() {
  const [keyword, setKeyword] = useState('');
    const [products, setProducts] = useState([]);

    const handleSearch = async () => {
        const response = axios.get(process.env.REACT_APP_BACK_HOST_URL + "/allsearch", {
            params: { keyword },
        });
        setProducts(response.data);
    };


  return (
    <>
      <section className="section">
				<div className="container">
					<div className="row">
						<div className="col-md-12 col-sm-12">
              <h1 className="sub_title">검색</h1>              
              <input type="search" name="all_search" className="all_search_input" value={keyword} onChange={(e) => setKeyword(e.target.value)} />
              <input type="submit" value="조회" className="search_btn" onClick={handleSearch} />
              <div className="all_search">
                <ul>
                {products.length > 0 ? (
                    products.map((product) => (
                        <li key={product.id}>{product.board_content}</li>
                    ))
                ) : (
                    <li>No products found.</li>
                )}
              </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResultSearch;
