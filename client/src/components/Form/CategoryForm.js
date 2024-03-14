import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{borderRadius:'2px',border:'0.5px solid brown',fontFamily:'Nunito Sans'}}
          />
        </div>

        <button type="submit" className="btn" style={{ backgroundColor:'#4b1717',borderRadius:'3px',color:'white',fontFamily:'Poppins'}}>
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
