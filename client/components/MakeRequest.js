import React, {Component} from 'react';
<<<<<<< HEAD

class MakeRequest extends Component {
=======
import { Router, Route, Link, browserHistory } from 'react-router';

class MakeRequest extends Component {
    makeReq(event) {
    event.preventDefault();

    // get relevant data
    const title = event.target.elements[0].value;
    const note = event.target.elements[1].value;

    console.log(title, note);

    $.post('/makeRequest', { item: title, note: note })
    .done(data => {
      browserHistory.push('/userInfo')
    })
    .fail(console.error('error with makeRequest'));
  }

>>>>>>> 1ad620d1b998b16199b867a8587ed80b0e1f3dc3
  render() {
    return (
      <div>
        Make a Request!
<<<<<<< HEAD
=======
        <form className="form-inline" onSubmit={this.makeReq}>
          <div><input type="text" className="form-control" name="title" placeholder="title" /></div>
          <div><textarea rows="4" cols="50" className="form-control" name="note" placeholder="place a note here.." /></div>
          <div><button type="submit" className="btn btn-primary">Submit</button></div>
        </form>
>>>>>>> 1ad620d1b998b16199b867a8587ed80b0e1f3dc3
      </div>
    );
  }
}

export default MakeRequest;