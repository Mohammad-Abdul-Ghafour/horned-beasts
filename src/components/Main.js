import React from 'react';
import Hornedbeast from './HornedBeasts';
import './Main.css';
import Selectedbeast from './SelectedBeast';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            selectedBeast : {}
        };
    }

    handleShow = () => {
        this.setState({
            show: !this.state.show
        });
    }

    handleSelectedBeast = (title) => {
        console.log(title);
        let selectedBeast = this.props.beasrArray.find(element => element.title === title);
        console.log(selectedBeast);
        this.setState({selectedBeast : selectedBeast});
    }


    render() {
        let beasrArray = this.props.beasrArray;
        let newArray = beasrArray.map((element, index) => {
            return (<Hornedbeast
                handleShow={this.handleShow}
                handleSelectedBeast={this.handleSelectedBeast}
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
                <Selectedbeast showState={this.state} onHide={this.handleShow} />
            </div>
        );


    }
}
export default Main;
