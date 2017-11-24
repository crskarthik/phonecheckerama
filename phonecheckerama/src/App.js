import React, {
  Component
} from 'react';

import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      phoneNumber: '660-562-1600'
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(evt) {
    let phoneNumber = evt.target.value;
    this.setState({
      phoneNumber
    });
  }

  handleClick(evt) {

    let n = this.state.phoneNumber;
    var count = 0;
    var i = 0;

    for (i = 0; i < 12; i++) {
      if (n[i] === '-') {
        count++;
      }
    }

    let pattern = new RegExp(/[~`!#$%\^&*+=\\[\]\\';,/{}|\\":<>\?]/);
    if (count === 2 && n[3] === '-' && n[7] === '-' && n.length === 12 && !pattern.test(n) 
    &&  !n.includes(".")) {
      if (Object.is(n.toLowerCase(), n.toUpperCase())) {
        window.alert("Legal PhoneNumber")
      } else {
        window.alert("illegal PhoneNumber")
      }
    } else {
      window.alert("illegal PhoneNumber")
    }
  }


  render() {

    return (

      <div className = "App" >
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css"/>

          <form class="form-horizontal col-md-offset-3 col-md-6" action="#">
<fieldset>

<legend>Verify Phone Number</legend>

<div class="form-group">
  <label class="col-md-4 control-label" for="textinput">Enter Phone Number</label>  
  <div class="col-md-4">
  <input id="textinput" name="textinput" type="text" onChange = {this.handleChange} value = {this.state.phoneNumber} placeholder="placeholder" class="form-control input-md"/>
  </div>
</div>

<div class="form-group">
  <label class="col-md-4 control-label" for="singlebutton">Options:</label>
  <div class="col-md-4">
    <button id="singlebutton" class="btn btn-primary pull-left" name = "verifyPhoneNumber" onClick = {this.handleClick} >verifyPhoneNumber</button>
  </div>
</div>

</fieldset>
</form>

      </div>

    );
  }
}


export default App;