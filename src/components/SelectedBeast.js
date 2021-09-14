import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


class Selectedbeast extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         show: false
    //     };
    // }

    handleClose = () => {
        this.setState({ show: false });
    }

    // handleShow = () => {
    //     this.setState({ show: true });
    // }
    render() {
        // console.log(this.props)


        return (
            <div>


                <Modal show={this.props.showState} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img width='300' src={this.props.img} alt={this.props.title} />
                        {console.log(1111)}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}
export default Selectedbeast;
