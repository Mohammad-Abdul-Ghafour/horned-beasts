import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './HornedCSS.css';


class Hornedbeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nomberOfLikes: 0
        };
    }

    handelClicks = () => {
        this.setState({ nomberOfLikes: this.state.nomberOfLikes + 1 });
    }

    handelOnClick = () => {
        this.props.handleShow();
        this.props.handleSelectedBeast(this.props.title);
        this.setState({ nomberOfLikes: this.state.nomberOfLikes + 1 });
    }
    render() {
        // console.log(this.props)
        return (
            <div id='hornContainer'>
                <Card style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img onClick={this.handelOnClick} variant="top" src={this.props.image_url} alt={this.props.keyword} title={this.props.keyword} className='imgCss' />
                    <Card.Body className='classBody'>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text className='cardText'>INFO :
                            {this.props.description}
                            <br />
                            Number of Horns : {this.props.horns}
                        </Card.Text>
                        <div id='btnDiv'>
                            <Button className='btn' onClick={this.handelClicks} variant="primary">Like</Button>
                            <p>{this.state.nomberOfLikes} ❤️</p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}
export default Hornedbeast;
