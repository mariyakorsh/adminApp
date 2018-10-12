import React, { Component } from "react";
import { connect } from "react-redux";
import { getUser } from "../../actions/getUser";
import {withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const mapStateToProps = state => {
  return {
    currentUser: state.users.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: id => {
      dispatch(getUser(id));
    }
  };
};
class User extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getUser(this.props.match.params.id);
  }
  render() {
    const currentUser = this.props.currentUser;
    if (!currentUser) {
      return <div>Loading ...</div>;
    }
    return (
      <div className="user">
        <div>ID: {currentUser.id}</div>
        <div>FirstName: {currentUser.firstName}</div>
        <div>LastName: {currentUser.lastName}</div>
        <div>Email: {currentUser.email}</div>
        <MyMapComponent
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAKAffCRoPTIfNnyAD3arYEqA_cH3P6JHA&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          location={currentUser.location}
        />
      </div>
    );
  }
}
const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap defaultZoom={3} defaultCenter={{ lat: +props.location[0], lng: +props.location[1] }}>
      {(
        <Marker position={{ lat: +props.location[0] , lng: +props.location[1] }} />
      )}
    </GoogleMap>
  ))
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
