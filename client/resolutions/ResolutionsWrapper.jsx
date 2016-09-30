import React from 'react';
import ReactDom from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ResolutionsForm from './ResolutionsForm.jsx';
import ResolutionSingle from './ResolutionSingle.jsx';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

Resolutions = new Mongo.Collection("resolutions");

export default class ResolutionsWrapper extends TrackerReact (React.Component) {
  constructor(){
    super();
    this.state = {
      subscription:{
        resolutions: Meteor.subscribe("userResolutions")
      }
    }
  }

  componentWillUnmount(){
    this.state.subscription.resolutions.stop();
  }

  resolutions(){
    return Resolutions.find().fetch();
  }

  render() {
    return (
      <div>
        <h1>Resolutions {Session.get('test')}</h1>
        <ResolutionsForm />
        <ul className="resolutions">
          <ReactCSSTransitionGroup transitionName="resolutionLoad" transitionEnterTimeout={600} transitionLeaveTimeout={600}>
            {this.resolutions().map( (resolution)=>{
              return <ResolutionSingle key={resolution._id} resolution={resolution} />
            })}
          </ReactCSSTransitionGroup>
        </ul>
      </div>

    )
  }

}
