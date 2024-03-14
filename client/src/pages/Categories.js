import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import Categoriescomp from "../components/Categorycomp/Categoriescomp";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      
      <div className="container" style={{ marginTop: "100px" ,marginBottom:"70px"}}>
      <Categoriescomp />
      <span style={{fontFamily:'Nunito Sans',fontSize:'2.5rem',color:'brown',display:'block',marginTop:'50px'}}>Explore More...</span>
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card" style={{border:'0.5px solid white',fontFamily:'Poppins',boxShadow:'1px 1px 5px 0px #423e3e'}}>
                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
