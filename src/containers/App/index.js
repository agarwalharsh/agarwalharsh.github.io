import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import { browserHistory, hashHistory } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import HomePage from "../HomePage/";
import NotFound from "../NotFound/";
import ListPage from "../ListPage/";
import IssuePage from "../IssuePage/";
import * as actions from "../../actions/";
import labels from "../../configs/labels.json";
import "./index.css";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <a href="/github-issue-tracker/"><h1 className="header-title">{labels.homepageHeader}</h1></a>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <HomePage params={props.match.params} {...this.props} />
              )}
            />
            <Route
              exact
              path="/github-issue-tracker/"
              render={props => (
                <HomePage params={props.match.params} {...this.props} />
              )}
            />
            <Route
              exact
              path="/github-issue-tracker/:gituser/:gitrepo"
              render={props => (
                <ListPage params={props.match.params} {...this.props} />
              )}
            />
            <Route
              path="/github-issue-tracker/:gituser/:gitrepo/issues/:issueid"
              render={props => (
                <IssuePage params={props.match.params} {...this.props} />
              )}
            />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

function mapStateToProps(store) {
  console.log(store.CommentsData);
  return {
    repos: store.userRepos,
    issues: store.repoIssues,
    issueDetail: store.issueDetail,
    comments: store.CommentsData
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps)(Main);

export default App;
