import React from 'react';
import Hornedbeast from './HornedBeasts';
import './Main.css';
import Selectedbeast from './SelectedBeast';
import Formmodal from './FormModal';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            selectedBeast: {},
            numberOfHornes: 0
        };
    }

    handleShow = () => {
        this.setState({
            show: !this.state.show
        });
    }

    handleFilter = (numberOfHornes) => {


        this.setState({
            numberOfHornes: numberOfHornes
        });

    }

    handleSelectedBeast = (title) => {
        console.log(title);
        let selectedBeast = this.props.beasrArray.find(element => element.title === title);
        console.log(selectedBeast);
        this.setState({ selectedBeast: selectedBeast });
    }


    render() {
        let beasrArray = this.props.beasrArray;
        let filterArray = beasrArray.filter(element =>
        // element.horns === this.state.numberOfHornes
        {
            if (this.state.numberOfHornes === 0) {
                return element;
            } else {
                return element.horns === this.state.numberOfHornes;
            }
        }
        );
        let newArray = filterArray.map((element, index) => {
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
            <>
                <Formmodal handleFilter={this.handleFilter} />
                <div id='container'>
                    {newArray}
                </div>
                <Selectedbeast showState={this.state} onHide={this.handleShow} />
            </>
        );


    }
}
export default Main;
