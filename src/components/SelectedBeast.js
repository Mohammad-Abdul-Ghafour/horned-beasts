import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';


class Selectedbeast extends React.Component {

    handle

    render() {
        // console.log(this.props)

        return (
            <div>
                <Modal show={this.props.showState.show} onHide={this.props.onHide}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.showState.selectedBeast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <img width='100%' src={this.props.showState.selectedBeast.image_url} alt={this.props.showState.selectedBeast.title}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.props.onHide}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </div>
        );
    }
}
export default Selectedbeast;
