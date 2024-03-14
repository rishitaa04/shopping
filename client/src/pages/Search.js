import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import "../styles/SearchStyles.css";
import { URL } from "../baseurl";
const Search = () => {
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container" style={{backgroundColor:'linen',padding:'15px'}}>
        <div className="text-center">
          <h1 style={{marginTop:'70px',fontFamily:'Ubuntu',fontWeight:'200',color:'#470a04'}}>Search Results</h1>
          <h6 style={{fontFamily:'Nunito Sans',color:'#a84c1e',fontSize:'1.1rem'}}>
            {values?.results.length < 1
              ? "No Products Found"
              : ` ${values?.results.length} matching results found`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card" id="searchcard">
                <img
                  src={`${URL}/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
              
                  id="seimg"
                />
                <div className="card-body" style={{height:'40%',fontFamily:'Nunito Sans',textAlign:'left'}}>
                 <div style={{display:'flex',marginBottom:'10px',width:'100%'}}>
                 <div>
                  <h5 className="card-title" >{p.name}</h5>
                  <p className="card-text" style={{color:'#0e1e36',fontWeight:'200'}}>
                    {p.description.substring(0, 30)}...
                  </p>
                  </div>
                  <p className="card-text" style={{margin:'0',color:'#15360e',fontWeight:'400',fontSize:'1.2rem'}}> $ {p.price}</p>
                  </div>
                  <div style={{display:'flex',marginBottom:'3px'}}>
                  <button class="btn" id="morebtn">More Details</button>
                  <button class="btn" id="cartaddbtn">ADD TO CART</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
