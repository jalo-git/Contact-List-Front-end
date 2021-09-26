import React, { Component } from 'react';
import Axios from "axios";
import useState from 'usestate';
export default class FormDataComponent extends Component {
    

    userData;

    constructor(props) {
         

        
    Axios.get("http://localhost:3000/").then((response) => {
      
    
        console.log(response.data);
      });
        super(props);
    

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            email: "",
            phone: ""
        }
     
        

    }
  
   
    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }

    
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                name: this.userData.name,
                email: this.userData.email,
                phone: this.userData.phone
            })
        }else {
            this.setState({
                name: '',
                email: '',
                phone: ''
            })
        }
    }

    componentWillUpdate(nextProps, nextState) {

        localStorage.setItem('user', JSON.stringify(nextState));

    }

    
    onSubmit(e) {
        e.preventDefault()
        console.log(this.state.name)
        Axios.post("http://localhost:3000/create", {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            
          }).then(() => {
           console.log("success")
          });     
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
      
 
    
        
    }
          

    
    
   




    
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                            <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                            <input type="text" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                            <input type="text" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                    </div>
                    <button type="submit" className="btn btn-success btn-block">Add Contact</button>
                </form>
            </div>
        )
    }
}