import { Component } from "react";
import mario from '../mario.png'



class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numImages: 1
        }

        this.contentChange = this.contentChange.bind(this)
    }

    contentChange(event){
        this.setState({numImages: event.target.value})
    }


    render(){
        let images = [];
        let imgCount = this.state.numImages
        while(imgCount > 0){
            images.push(
                <img src={mario} alt="Mario" />
            )
            imgCount--;
        }

        return(
            <div>
                <form>
                    <label>
                        Choose the number of images:
                        <select value={this.state.numImages} onChange={this.contentChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="100">100</option>
                        </select>
                    </label>
                </form>
                
                {images}
                
            </div>
            
        )
    }



}

export default(Content)