import './App.css';
import * as React from "react";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"url": ""};
    }
    componentDidMount() {
        fetch("https://api.thedogapi.com/v1/images/search?mime_types=gif")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({url: result[0]["url"]})
                    console.log(this.state.url);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log(error);
                }
            )
    }

    getdaysfrom(){
        let start = new Date("2020-12-1");
        let today = Date.now();
        let daycount = 0;
        while (today > start){
            daycount++;
            start.setDate(start.getDate() + 1);
        }
        return daycount - 1
    }

    render() {
        let days = this.getdaysfrom() % 2;
        let almuerzo = days === 0? "Kusarigama padre" : "Mermelada";
        let once = days === 0? "Mermelada": "Kusarigama padre";
        return (
            <div className="App">
                <header className="App-header">
                    <p>A quien le toca al almuerzo?</p>
                    <p>{almuerzo}</p>
                    <p>Y a la once?</p>
                    <p>{once}</p>
                    <img src={this.state.url} alt={"loading..."} />
                </header>
            </div>
        );
    }
}

export default App;
