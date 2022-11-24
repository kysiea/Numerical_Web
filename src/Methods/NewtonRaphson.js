import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

class NewtonRaphson extends Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }
    getValue(){
        var equation1 = document.getElementById("equation1").value
        var equation2 = document.getElementById("equation2").value
        var X = document.getElementById("X").value
        do{
            var x=X
            var fx = eval(equation1)
            var x=X
            var dfx = eval(equation2)
            var x0 = X - (fx/dfx)
            var error = (x0-X)/x0*100
            X=x0
        }while(error >= 0.000001 || error <= -0.0000001)
        var ans = x0
        document.getElementById("showans").innerHTML=ans;
    }
    
    render(){
        return(
            <div>
                <br/>
                <h3>Newton Raphson</h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <div>
                            <Form.Control id="equation1" type="text" placeholder="f(x)" style={{width:"20%",margin: "0 auto"}}></Form.Control>
                            <Form.Control id="equation2" type="text" placeholder="f'(x)" style={{width:"20%",margin: "0 auto"}}></Form.Control>
                            <Form.Control id="X" type="number" placeholder="X0" style={{width:"20%",margin: "0 auto"}}></Form.Control> 
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
export default NewtonRaphson; 
