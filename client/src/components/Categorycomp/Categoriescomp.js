import React from "react";
import "./Categoriescomp.scss";
import { Link } from "react-router-dom";
const Categoriescomp = () => {
  return (
    <div className="categories">
      <div className="cold">
        <div className="rowd">
          <img
            src="https://images.pexels.com/photos/2043590/pexels-photo-2043590.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <button>
            <Link className="link" to="/category/sale">
              New
            </Link>
          </button>
        </div>
        <div className="rowd">
          <img
            src="https://images.pexels.com/photos/1926620/pexels-photo-1926620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to="/category/women" className="link">
              Makeup
            </Link>
          </button>
        </div>
      </div>
      <div className="cold">
        <div className="rowd">
          <img
            src="https://images.pexels.com/photos/5650015/pexels-photo-5650015.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
          <button>
            <Link to="/category/newseason" className="link">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="cold col-l">
        <div className="rowd">
          <div className="cold">
            <div className="rowd">
              <img
                src="https://images.pexels.com/photos/1687719/pexels-photo-1687719.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <button>
                <Link to="/category/mens" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="cold">
            <div className="rowd">
              <img
                src="https://images.pexels.com/photos/2442893/pexels-photo-2442893.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt=""
              />
              <button>
                <Link to="/category/accessories" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="rowd">
          <img
            src="https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <button>
            <Link to="/category/kids" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categoriescomp;
