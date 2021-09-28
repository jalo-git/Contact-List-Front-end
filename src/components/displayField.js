import React from "react";
import Axios from "axios";

class DisplayField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
    Axios.get("http://localhost:5000/").then((response) => {
      // console.log(response.data);
      // this.state = { posts: [response.data] };

      // console.log(this.state.posts)
      this.setState({ posts: response.data })
      console.log(this.state.posts)



    });

  }

  handleClick(e) {
    e.preventDefault()
    console.log(e.target)
  }

  getForm() {
    console.log ('view clicked')

  }

  render() {

    const style = {
      
    }

    return (

      <div className="container pt-3" style={style}>
        <div className="card">
          <table className="table">
            <thead bg="dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">FullName</th>
                <th scope="col">Email Address</th>
                <th scope="col">Contact Number</th>
                <th scope="col">Location</th>
                <th scope="col">Registered Date</th>
                <th scope="col">Action</th>
              </tr>



              {
                React.Children.toArray(
                  this.state.posts.map((val, i) =>

                    <>
                      <tr>


                        <td scope="col">{val.id}</td>
                        <td scope="col">{val.name}</td>
                        <td scope="col">{val.email}</td>
                        <td scope="col">{val.phone}</td>
                        <td scope="col">{val.location}</td>
                        <td scope="col">{val.date}</td>
                        <td scope="col"><a href="#" onClick={this.getForm.bind(this)}> <button className=" btn btn-outline-success">view</button> </a></td>
                        <td scope="col"> <button className=" btn btn-outline-primary">edit</button></td>
                        <td scope="col"><button className=" btn btn-outline-danger">delete</button></td>

                      </tr>
                    </>
                  )
                )
              }
            </thead>
          </table>
        </div>
      </div>


    );

  }

}

export default DisplayField;




