import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

class OnePoint extends Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }
    getValue(){
        var equation = document.getElementById("equation").value;
        var x0 = document.getElementById("X0").value;
        var error;
        do{
            var x=x0
            var fx0 = eval(equation)
            var x1=fx0 
            x0 = x1       
        }while(error >= 0.000001 || error <= -0.0000001)
        var ans = x1
        document.getElementById("showans").innerHTML=ans;   
    }

    render(){
        return(
            <div>
                <br/>
                <h3>One Point Iteration Method</h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <div>
                            <Form.Control id="equation" type="text" placeholder="f(x)" style={{width:"20%",margin: "0 auto"}}></Form.Control>                        
                            <Form.Control id="X0" type="number" placeholder="X0" style={{width:"20%" ,margin: "0 auto"} }></Form.Control>                          
                        </div>
                        <Button onClick={this.getValue} variant="success" style={{marginTop:"20px"}}>Summit</Button>
                    </Form.Group>
                </Form>
                <br/>
                <div>
                    <h4>Result is:</h4>
                    <div id="showans"></div>
                </div>
            </div>
        );
    }
}
export default OnePoint; 
