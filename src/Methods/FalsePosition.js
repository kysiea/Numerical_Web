import {React,Component} from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

class FalsePosition extends Component{
    constructor(){
        super();
    }
    componentDidMount(){

    }
    getValue(){
        var equation = document.getElementById("equation").value;
        var xl = document.getElementById("XL").value;
        var xr = document.getElementById("XR").value;
        do{
            var x=xr
            var fxr = eval(equation)
            var x=xl
            var fxl = eval(equation)
            var x1 = (xl*fxr - xr*fxl)/(fxr-fxl)
            var x=x1
            var fx1 = eval(equation)           
            if(fx1*fxr<0){
                var error=(x1-xl)/x1*100
                xl=x1
            }
            else{
                var error=(x1-xr)/x1*100
                xr=x1
            }
        }while(error >= 0.000001 || error <= -0.0000001)
        var ans = x1
        document.getElementById("showans").innerHTML=ans;   
    }
    
    render(){
        return(
            <div>
                <br/>
                <h3>False Position Method</h3>
                <br/>
                <Form>
                    <Form.Group className="mb-3">
                        <div>
                            <Form.Control id="equation" type="text" placeholder="f(x)" style={{width:"20%",margin: "0 auto"}}></Form.Control>                        
                            <Form.Control id="XL" type="number" placeholder="XL" style={{width:"20%" ,margin: "0 auto"} }></Form.Control>
                            <Form.Control id="XR" type="number" placeholder="XR" style={{width:"20%" ,margin: "0 auto"} }></Form.Control>                           
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
export default FalsePosition; 
