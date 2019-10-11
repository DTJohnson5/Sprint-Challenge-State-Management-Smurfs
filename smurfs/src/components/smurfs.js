import React from "react";
import Reducer from "../reducers/index";
import { connect } from "react-redux";
import { fetchSmurfs } from "../actions/index";

class Smurfs extends React.Component {
  componentDidMount() {
    this.props.fetchSmurfs();
  }

  render() {
    console.log(Reducer);
    console.log(this.props);
    return (
      <div>
        <h2>Our SMURF Family!!</h2>
        {this.props.smurfs.map(smurf => {
          return (
            <div className="smurfs" key={smurf.id}>
              <h2>{smurf.name}</h2>
              <p>Age: {smurf.age} smurf years</p>
              <p>Height: {smurf.height}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { fetchSmurfs }
)(Smurfs);
