import logo from './logo.svg';
import React,{Component} from 'react';
import classes from './App.module.css'
import ProductPreview from './ProductPreview';
import ProductDetails from './ProductDetails';
import Topbar from './TopBar';
import ProductData from './ProductData';


class App extends Component{
state={
  productData: ProductData,
  currentPreviewImagePos:0,
  currentSelectedFeature:0,
}

onColorOptionClick=(pos)=>{

  
  this.setState({currentPreviewImagePos:pos})
}

onFeatureItemClick=(pos)=>{
  
  this.setState({currentSelectedFeature:pos})

}
  render(){


    return (
      <div className='App' >
        <Topbar/>
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
              <ProductPreview currentPreviewImage=
              {this.state.productData.colorOptions[this.state.currentPreviewImagePos].imageUrl}
              currentSelectedFeature={this.state.currentSelectedFeature} 
              />
  
          </div>
          <div className={classes.ProductData}>
             <ProductDetails data={this.state.productData} 
             onColorOptionClick={this.onColorOptionClick}
             currentPreviewImagePos={this.state.currentPreviewImagePos}
             onFeatureItemClick={this.onFeatureItemClick}
             currentSelectedFeature={this.state.currentSelectedFeature}/>
  
          </div>
         
  
        </div>
      </div>
      
    );
  }
}

export default App;



//https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg

//height="100" width="80" 