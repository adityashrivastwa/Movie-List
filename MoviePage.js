import React, { Component } from 'react';

import Aux from '../../hoc/Aux';
import classes from './MoviePage.css';
import { Button, Row, Input } from 'react-materialize';

class MoviePage extends Component {
    render() {
        return (
            <Aux>
                <Row>
                    <div className={classes.MoviePage}> <h1 style={{ textAlign: 'center' }}>Movie List </h1><br />
                        <Input type='text'
                            onChange={this.props.changed}
                            value={this.props.value}
                            placeholder='type your movie name here'
                            label='Search'
                            s={4} /> <br />
                        <div> <Button waves='light' onClick={this.props.clicked}>SUBMIT</Button></div> </div>
                </Row>
            </Aux>
        )
    }
}



export default MoviePage;