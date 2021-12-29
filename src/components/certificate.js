import { Component } from "react";
import certificate from "../certificate.jpg";

class Certificate extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={certificate}
          alt="Certificate was not loaded properly."
          style={{
            position: "absolute",
            top: "0px",
            width: "100%",
            maxHeight: "100%",
          }}
        />
        <div
          className="photo"
          style={{
            position: "absolute",
            top: "6vh",
            left: "0px",
            width: "33%",
            height: "44vh",
            border: "1px solid #e9e9e9",
            background: "#e9e9e9",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <img
            src="#"
            id="output"
            alt="Upload Your Photo"
            className="text-center"
            style={{ maxHeight: "205px" }}
          />
        </div>

        <h2
          style={{
            position: "absolute",
            top: "32%",
            left: "33%",
            padding: "0px 5%",
            color: "#d7d3ca",
            textTransform: "uppercase",
            background: "#f3f3f3",
            width: "65%",
            fontFamily: "'Roboto Condensed', sans-serif",
            fontWeight: "500",
            fontSize: "45px",
            lineHeight: "8vh",
          }}
        >
          <br />
          {this.props.name}
        </h2>
      </div>
    );
  }
}

export default Certificate;
