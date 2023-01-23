import React,{Component} from 'react';
import {Card, CardImg, CardText, CardBody,CardTitle} from 'reactstrap';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'
import { form_data } from '../form_data';

 class Formgrp extends Component{
    constructor(props){
        super(props);
        this.state={
            status:""
        }
    }
    render(){
        const handleform=(event)=>{
            if(event.target.value.length<=0){
                this.setState({
                    status:"This field cannot be empty"
                })
            }
            else{
                this.setState({
                    status:""                
                })
            }
            console.log(event.target.value)
        }
        const eg=this.props.data.inputType.toLowerCase();
        return(
            <FormGroup className="row center">
                <Label className="col-3 mt-2" for="test">{this.props.data.label}</Label>
                <Input className="col-8" onChange={handleform} type={eg} name="name" id="name" placeholder={eg}></Input>
                <FormText className="center"><p className='text-danger'>{this.state.status}</p></FormText>
            </FormGroup>
        );
    }
 }

class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            request:"invalid",
            frnt:"valid"
        }
    }
    render(){
        const handle_request=()=>{
            this.setState({
                frnt:"invalid",
                request:"valid"
            })
        }
        if(this.state.frnt==="valid"){
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-6 center'>
                            <Card className="mt-3">
                                <CardTitle className="bg-dark cardheader">Form Request</CardTitle>
                                <CardBody>
                                    <Form>
                                        <FormGroup className="row">
                                            <Label className="col-3" for="formid">Form ID</Label>
                                            <Input className="col-8" name="formid" type="text" id="form_id" placeholder="Form ID" />
                                        </FormGroup>
                                        <Button onClick={handle_request} className="bg-primary">Request</Button>
                                    </Form>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            )
        }
        if(this.state.request==="valid"){
            return(
                <div className='container'>
                    <div className='row'>
                        <div className='col-8 center'>
                            <Card className="mt-3">
                                <CardTitle className="bg-info cardheader">Form</CardTitle>
                                <CardBody>
                                    <Form>
                                        {form_data.map((data)=>
                                            <Formgrp data={data.display} />)
                                        }
                                    </Form>
                                    <Button className="bg-secondary">Submit</Button>
                                </CardBody>
                            </Card>
                        </div>
                    </div>
                </div>
            );
        }
    };
}

export default Main;