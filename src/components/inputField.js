import React, { Component, useState, useEffect } from 'react';
import Axios from "axios";

export default class FormDataComponent extends Component {

    userData;

    constructor(props) {

        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            email: "",
            phone: "",
            location: "",
            date: ""
        }

    };

    onChangeName(e) {
        this.setState({ name: e.target.value })
    }

    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }

    onChangePhone(e) {
        this.setState({ phone: e.target.value })
    }

    onChangeLocation(e) {
        this.setState({ location: e.target.value })
    }

    onChangeDate(e) {
        this.setState({ date: e.target.value })
    }

    onSubmit(e) {


        e.preventDefault()

        Axios.post("http://localhost:5000/create", {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            location: this.state.location,
            date: this.state.date,

        }).then(() => {
            console.log("success")
        });

        this.setState({
            name: '',
            email: '',
            phone: '',
            location: '',
            date: ''
        })

    }

    render() {
        const style = {
            width: "95%"
        }
        return (
            <div className="container m-2 p-2" style={style}>
                <div className="card p-2 mw-2">

                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" placeholder="Full Name" className="form-control" value={this.state.name} onChange={this.onChangeName} />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="text" placeholder="Email Address" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                        </div>
                        <div className="form-group">
                            <label>Contact Number</label>
                            <input type="text" placeholder="Phone Number" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
                        </div>
                        <div className="form-group">
                        <div className="dropdown show">
                            <label for="inputState">Location</label>
                            <select id="inputState" className="form-control">
                                <option selected>Choose Location</option>
                                <option value={this.state.location} onChange={this.onChangeLocation}>Cebu</option>
                                <option value={this.state.location} onChange={this.onChangeLocation}>Manila</option>
                            </select>
                        </div>
                        </div>

                       
                        <div className="form-group">
                            <label>Registered Date</label>
                            <input type="date" className="form-control" value={this.state.date} onChange={this.onChangeDate} />
                        </div> <br />
                        <button type="submit" className="btn btn-success btn-block" >Add Contact</button>
                    </form>
                </div>
            </div>
        )
    }
}