import './Seo.css';
import './loginForm';
import { Component } from 'react';
import Headline from './Headline';
import Bagian2 from './Bagian2'

class Seo extends Component{
    render(){
        return(
            <div className="App">
                <Headline></Headline>
                <Bagian2></Bagian2>
            </div>
        )
    }

}
  

export default Seo;