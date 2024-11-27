import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Table, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <h3>CRUD Operations</h3>
        <ProductConsumer>
          {(value) => {
            // Ensure value is available


            return (
              <Table size="sm" variant="dark" striped bordered hover>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Information</th>
                    <th>Price</th>
                    <th>Company</th>
                    <th>Action</th> 
                  </tr>
                  <tr>
                    <td><input type="text" value={value.title} onChange={(e) => {value.updateValue(e, "title")}} /></td>
                    <td><input type="text" value={value.info} onChange={(e) => {value.updateValue(e, "info")}} /></td>
                    <td><input type="text" value={value.price} onChange={(e) => {value.updateValue(e, "price")}} /></td>
                    <td><input type="text" value={value.company} onChange={(e) => {value.updateValue(e, "company")}} /></td>
                    <td>
                        
                      </td>
                  </tr>
                </thead>
                <tbody>
                  {value.Alldata.map((product) => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>{product.info}</td>
                      <td>{product.price}</td>
                      <td>{product.company}</td>
                      <td>
                        <button size='sm' variant="primary" onClick={() => {value.onEdit(product.id)}}>Update</button>
                        <button size='sm' variant="danger" onClick={() => {value.onDelete(product.id)}}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
};


