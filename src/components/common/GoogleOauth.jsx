import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";

export default class GoogleOauth extends Component {
  googleResponse = () => {};

  render() {
    return (
      <div>
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          onSuccess={this.googleResponse}
          onFailure={this.googleResponse}
          cookiePolicy="single_host_origin"
          uxMode="popup"
          isSignedIn={false}
        />
      </div>
    );
  }
}
