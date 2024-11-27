import React, { Component } from 'react'; 
import { rowData } from './appData';

const productContext = React.createContext();

class ProductProvider extends Component {
  state = {
    Alldata: rowData,
    id: "",
    title: "",
    info: "",
    company: "",
    updateEdit: []
  };

  onEdit = () => {
    const tempProduct = this.state.Alldata;
    const index = tempProduct.indexOf(this.getRecord(id));
  }

  render() {
    return (
      <productContext.Provider 
      value={{ ...this.state }}>

        {this.props.children}
      </productContext.Provider>
    );
  }
}

const ProductConsumer = productContext.Consumer;


export { ProductProvider, ProductConsumer };
