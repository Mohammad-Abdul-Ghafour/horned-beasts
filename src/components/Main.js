import React from 'react';
import Hornedbeast from './HornedBeasts';
import './Main.css';
import Selectedbeast from './SelectedBeast';

class Main extends React.Component {
    constructor() {
        super(props)
        this.state = {
            show: false,
        }
    }

    handleShow = () => {
        this.setState ({
            show : true
        })
    }

    render() {
        let beasrArray = this.props.beasrArray;
        let newArray = beasrArray.map((element, index) => {
            return (<Hornedbeast
                handleShow={this.handleShow}
                // handleHide={this.props.handleClose}
                // showState={this.props.showState}
                key={index} title={element.title}
                image_url={element.image_url}
                description={element.description}
                keyword={element.keyword}
                horns={element.horns} />
            );
        });

        return (
            <div id='container'>
                {newArray}
                <Selectedbeast />
            </div>
        );


    }
}
export default Main;
