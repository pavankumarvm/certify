import { Component, useRef } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";

import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Certificate from "../components/certificate";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Your Name",
      photo: "",
    };
    this.componentRef = "";
  }

  render() {
    return (
      <div className="home" style={{ width: "100%", height: "100vh" }}>
        <div
          style={{
            width: "100%",
            display: "grid",
            gridAutoFlow: "row",
            gridTemplateColumns: "40% 60%",
          }}
        >
          <div className="p-4" style={{ width: "100%" }}>
            <h1>Certify Yourself</h1>
            <hr />
            <form className="p-2">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => {
                    if (e.target.value.length === 0) {
                      this.setState({
                        name: "Your Name",
                      });
                    } else {
                      this.setState({
                        name: e.target.value,
                      });
                    }
                  }}
                  placeholder="Your Name"
                />
                <small id="emailHelp" className="form-text text-muted">
                  This name will be displayed on certificate
                </small>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlFile1">
                  Your Photo :&nbsp;
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="form-control-file"
                  aria-describedby="imageHelp"
                  onChange={(e) => {
                    var output = document.getElementById("output");
                    output.src = URL.createObjectURL(e.target.files[0]);
                    // output.onload = function () {
                    //   URL.revokeObjectURL(output.src); // free memory
                    // };
                  }}
                  id="exampleFormControlFile1"
                />
                <br />
                <small id="imageHelp" className="form-text text-muted">
                  It will be better if Dimensions are
                  <strong> 200px X 205px </strong>
                  or aspect ratio <strong>1:1.</strong>
                </small>
              </div>
            </form>
            <div className="row m-2 p-4">
              <ReactToPrint content={() => this.componentRef}>
                <PrintContextConsumer>
                  {({ handlePrint }) => (
                    <button className="btn btn-primary" onClick={handlePrint}>
                      Print this out!
                    </button>
                  )}
                </PrintContextConsumer>
              </ReactToPrint>
            </div>
            <div>
              <h2>
                This Preview is just for reference. Print can be some what
                different.
              </h2>
            </div>
          </div>
          <div className="py-2" style={{ width: "100%" }}>
            <div
              style={{
                position: "absolute",
                width: "50%",
                // padding: "5%",
                height: "100%",
              }}
            >
              <Certificate
                name={this.state.name}
                ref={(el) => (this.componentRef = el)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
