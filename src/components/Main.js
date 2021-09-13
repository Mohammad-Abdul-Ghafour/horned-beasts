import React from 'react'
import Hornedbeast from './HornedBeasts'
import beasrArray from './Hornesdata.json'
import './Main.css'

class Main extends React.Component {
    
    render() {
        let newArray =beasrArray.map((element, index) => {
            return (<Hornedbeast key={index} title={element.title} image_url={element.image_url} description={element.description} keyword={element.keyword} horns={element.horns} />)
        })
        return (
            <div id= 'container'>
                {newArray}
            </div>
        )


    }
}
export default Main;