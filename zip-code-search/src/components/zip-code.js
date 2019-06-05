import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ZipCode extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zipCode: 0
        };
    }

    handleOnChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form onChange={this.handleOnChange}>
                    Enter a Zip Code <br/>
                    <input type="number" name="zipCode"/>
                </form>
            </div>
        );
    }

};

export default ZipCode;
