import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';


class Formmodal extends React.Component {

    selectedNumber = async (event) => {
        event.preventDefault();
        console.log(typeof event.target.value);
        let qwer = Number(event.target.value);
        await this.props.handleFilter(qwer);
    }

    render() {
        return (
            <div>
                <Form style={{width:'30%',marginLeft:'100px'}} onChange={this.selectedNumber}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Filter</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="0">Please Choose Number Of Horns</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="100">Moor..</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
            </div>
        );
    }
}
export default Formmodal;
