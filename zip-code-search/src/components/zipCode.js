import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import "./zipCode.css";

class ZipCode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zipCode: 11419,
            data: [],
        };

    }


    handleOnChange = event => {

        this.setState({
            zipCode: event.target.value
        });
    }

    componentDidMount() {

        axios.get('http://ctp-zip-api.herokuapp.com/zip/${this.state.zipCode}')
            .then(response => {
                const newData = response.data;
                this.setState({data: newData})
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Enter a Zip Code <br/>
                    <input type="number" name="zipCode" onChange={this.handleOnChange}/>
                    <button type="submit"> Search </button>
                </form>
                <div className="zip">
                    {this.state.data.map(data => <ZipCodeCard city={data.City}
                    state={data.State} latitude={data.Lat} longitude={data.Long}
                    population={data.EstimatedPopulation} wages={data.TotalWages}/>)}
                </div>
            </div>
        );
    }

};

class ZipCodeCard extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="zipCard">
                <ul>
                    <h1> {this.props.city}, {this.props.state} </h1>
                    <li> State: {this.props.state} </li>
                    <li> Location: ({this.props.latitude}, {this.props.longitude}) </li>
                    <li> Population (estimated): {this.props.population} </li>
                    <li> Total Wages: {this.props.wages} </li>
                </ul>
            </div>
        );
    }


};

export default ZipCode;
