import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';


class SecantMethod extends Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }
    
    getValue(){
        var equation1 = document.getElementById("equation1").value
        var equation2 = document.getElementById("equation2").value
        var X0 = document.getElementById("X0").value
        var X1 = document.getElementById("X1").value
        do{
            var x=X0
            var fx0 = eval(equation1)
            var x=X0
            var dfx0 = eval(equation2)
            var x=X1
            var fx1= eval(equation1)
            var dfx1 = (fx0-fx1)/(X0-X1)
            var X2 = X1-(fx1/dfx1)
            var x=X2
            var dfx2 = eval(equation1)
            fx0 = fx1
            X0 = X1
            X1 = X2
            var error = fx1
        }while(error >= 0.000001 || error <= -0.0000001)
        var ans = X1
        document.getElementById("showans").innerHTML=ans;
    }

    render(){
        return(
            <div>
                <br/>
                <h3>Secant Method</h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>
                            input
                        </Form.Label>
                        
                        <div>
                            <Form.Control id="equation1" type="text" placeholder="f(x)" style={{width:"20%",margin: "0 auto"}}></Form.Control>
                            <Form.Control id="equation2" type="text" placeholder="f'(x)" style={{width:"20%",margin: "0 auto"}}></Form.Control>
                            <Form.Control id="X0" type="number" placeholder="X0" style={{width:"20%",margin: "0 auto"}}></Form.Control> 
                            <Form.Control id="X1" type="number" placeholder="X1" style={{width:"20%",margin: "0 auto"}}></Form.Control> 
                        </div>
                        <Button onClick={this.getValue} variant="success" style={{marginTop:"20px"}}>
                            summit
                        </Button>
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
export default SecantMethod;