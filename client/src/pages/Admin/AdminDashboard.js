import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3" style={{fontFamily:'Nunito Sans',border:'0.5px solid brown',borderRadius:'3px'}}>
              <h3> Admin Name : <span style={{fontWeight:'100',color:'green'}}>{auth?.user?.name}</span></h3>
              <h3> Email : <span style={{fontWeight:'100',color:'green'}}>{auth?.user?.email}</span></h3>
              <h3> Contact : <span style={{fontWeight:'100',color:'green'}}>{auth?.user?.phone}</span></h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
