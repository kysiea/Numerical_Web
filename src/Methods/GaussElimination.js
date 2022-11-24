import { Component, React } from "react";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class GaussElimination extends Component{
    constructor(){
        super()

    }
    componentDidMount(){

    }
    createinputbox =()=>{
        var Size = document.getElementById("Matsize").value;
        console.log(Size)
        var MatString = '';
        for(var i=0;i<Size;i++){
          for(var j=0;j<Size;j++){
            MatString +="<input id='Mat"+i+j+"' type='number' style='width:50px;margin:1px'/>";
            console.log("Mat"+i+j.value);
            //console.log("MatStirng");
            //console.log(document.getElementById("Mat"+i+j).value);
          }
          MatString +=" | <input id='Matans"+i+"0' type='number' style='width:50px;margin:1px'/>";
          MatString +="<br>";
        }
        //console.log(MatString);
        document.getElementById("MatInput").innerHTML=MatString;
    }
    
    GaussElimination =()=>{
        var Size = document.getElementById("Matsize").value;
        var mat=[];
        var matans=[];
        console.log("GaussElimination");
        for(let i=0;i<Size;i++){
            mat.push([]);
            for(let j=0;j<Size;j++){
                //console.log("mat"+i+j);
                console.log(document.getElementById("Mat"+i+j).value);
                mat[i].push(document.getElementById("Mat"+i+j).value);
                console.log(mat[i]);
            }
            matans.push([]);
            matans[i].push(document.getElementById("Matans"+i+"0").value);   
        }
        for(let i=0; i<mat.length; i++) {
            for(let j=i+1; j<mat.length; j++){
                var multivar = mat[j][i];
                if(i+1<=mat.length){
                    for(let k=0; k<mat.length; k++){
                        var x = (mat[j][k]-((mat[i][k]/mat[i][i])*multivar));
                        //console.log(mat[j][k],mat[i][k],mat[i][i],multivar);
                        //console.log("mat"+i+j);
                        mat[j][k] = x;
                    }
                    var y = (matans[j][0]-((matans[i][0]/mat[i][i])*multivar));
                    //console.log(matans[j][0],matans[i][0],mat[i][i],multivar);
                    matans[j][0] = y;
                }
            }
        }
        x=[];
        for(let j=0; j<mat.length; j++){
            x.push(null);
        }
        for(let i=mat.length-1; i>=0; i--) {
            ans = 0;
            for(let j=mat.length-1; j>=0; j--){
                if(x[j]!=null && mat[i][j]!=0){
                    matans[i][0] = matans[i][0]-(mat[i][j]*x[j]);
                }else if(mat[i][j]!=0){
                    ans += matans[i][0]/mat[i][j];
                }
            }
            x[i]=ans;
        }
        var ans='';
        for(let j=0; j<mat.length; j++){
            ans+="x"+String(j+1)+" = "+String(x[j])+"<br/>";
        }
        document.getElementById("show").innerHTML=ans;
    }
    
    render() {       
        return (
            <Container style={{ margin: "auto"}}>
            <Row style={{textalign: "center"}}>
                <Col md={3}></Col>
                <Col md={6}>
                <h3 style={{marginTop:"20px",marginBottom:"20px"}}>Gauss Elimination Method</h3>
                </Col>
                <Col md={3}></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col >
                    <Form.Group  as={Row} className="mb-2">
                        <Form.Label column sm="7">Matrix dimension:</Form.Label>
                        <Col sm="3"><Form.Select onChange={this.createinputbox} id="Matsize" aria-label="Default select example" >
                        <option>Size</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </Form.Select></Col>
                        </Form.Group>
                </Col>
                <Col></Col>
            </Row>          
            <div id="MatInput"></div>
            <Row>
                <Col></Col>
                <Col><Button style={{margin:"10px"}} onClick={this.GaussElimination}  variant="success">summit</Button>
                </Col>
                <Col></Col>  
            </Row>
            <div id='show'></div>
            </Container>       
        );
    }
}
export default GaussElimination;