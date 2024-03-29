import React from 'react';
import covid from './images/covid.png'
import {Chart, Cards , CountryPicker} from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component{

    state = {
        data :{}, 
        country : '',
    }


   

  async componentDidMount (){
    const fetchedData = await fetchData();

      this.setState({data : fetchedData});
  }

  handleCountryChange = async (country) => {
    //fetch the data
    //set the state
    const fetchedData = await fetchData(country);
    this.setState({data : fetchedData , country : country});
   }



    render(){
        const {data , country} = this.state;
        return(
            <div className ={styles.container}>
                <img className = {styles.image} src={covid} alt ='Covid-19'/>
                <Cards data={data}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/> 
            </div>
        )
    }
}

export  default App;