import React, {Component} from 'react';

export default class About extends Component {
  setVar(){
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
    return(
      <div>
        <h1>About us</h1>
        <p>Testg adsdsadas dsad asd asdas das das</p>
        <button onClick={this.setVar}>sign up</button>
      </div>
    )
  }

}
