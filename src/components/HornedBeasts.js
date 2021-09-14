import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './HornedCSS.css';
import Selectedbeast from './SelectedBeast';


class Hornedbeast extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         nomberOfLikes: 0,
    //         show: false
    //     };
    // }

    // handelClicks = () => {
    //     this.setState({ nomberOfLikes: this.state.nomberOfLikes + 1 });
    // }

    // show = () => {
    //     this.setState({ show: true });
    //     // this.props.handleShow();
    //     // <Selectedbeast
    //     //     showState={this.props.showState}
    //     //     hideState={this.props.handleHide}
    //     //     title={this.props.title}
    //     //     img={this.props.image_url}
    //     // />;
    // //    let div = <Selectedbeast
    // //                 showState={this.state.show}
    // //                 title={this.props.title}
    // //                 img={this.props.image_url}
    // //             />
    // }
    render() {
        // console.log(this.props)
        return (
            <div id='hornContainer'>


                <Card onClick={this.show} style={{ width: '18rem', height: '30rem' }}>
                    <Card.Img variant="top" src={this.props.image_url} alt={this.props.keyword} title={this.props.keyword} className='imgCss' />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>INFO :
                            {this.props.description}
                            <br />
                            Number of Horns : {this.props.horns}
                        </Card.Text>
                        <div id='btnDiv'>
                            <Button onClick={this.handelClicks} variant="primary">Like</Button>
                            <p>Likes : {this.state.nomberOfLikes}</p>
                        </div>
                    </Card.Body>
                </Card>
                {div = () =>{
                    return()
                }}
            </div>
        );
    }
}
export default Hornedbeast;
