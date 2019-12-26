import React, { Component } from "react";

export default class GithubOauth extends Component {
  githubResponse = () => {};

  render() {
    return (
      <div>
        <GitHubLogin
          clientId={process.env.REACT_APP_GITHUB_CLIENT_ID}
          scope={"user:email"}
          onSuccess={this.githubResponse}
          onFailure={this.githubResponse}
        />
      </div>
    );
  }
}
