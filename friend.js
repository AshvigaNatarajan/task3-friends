import React,{Component} from "react";
class App extends React.Component{
    render(){
        return(
            <div>
                <h1>Welcome to buddy club</h1>
                <h2> About My Friends</h2>
                <App3/>
                </div>
        );
    }
}
class App3 extends React.Component{
    constructor(){
        super();
        this.state={
            data:
            [
                {
                    "name":"pavithra:pavi"
                },
                {
                    "name":"renuka:renu"
                },
                {
                    "name":"Shanmu:sweety"
                }
            ]
        }
    }
    render(){
        return(
            <div>
                <Friends/>
                <ul>
                    {this.state.data.map((item)=><List data={item}/>)}
                </ul>
            </div>
        );
    }
}
class Friends extends React.Component{
    render(){
        return(
            <div>
                <h1>Friends</h1>
            </div>
        );
    }
}
class List extends React.Component{
    render(){
        return(
            <ul>
                <li>{this.props.data.name}</li>
            </ul>
        );
    }
}
export default App;
