import React from "react";

class DisplayField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { posts: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3000/posts/")
      .then(response => {
        response.json();
      })
      .then(posts => {
        this.setState({ posts });
      })
      .then(err => {
        console.log(err);
      });
  }

  render() {
    return (
        <div className="container w-5 p-5">
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
                    </tr>
                </thead>
            </table>
        </div>
    </div>
    );
  }
}

export default DisplayField;




