import React, {Component} from 'react';
import {getSpecialTips, isAuthenticated} from "../repository";
import {Redirect} from 'react-router-dom';

class Special extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tips: [],
      auth: true
    }
  }

  componentDidMount() {
    if (isAuthenticated()) {
      getSpecialTips()
        .then((tips) => {
          this.setState({tips});
        })
        .catch(err => {
          alert('User not Authenticated');
          this.setState({auth: false});
        })
    } else {
      alert('User not Authenticated');
      this.setState({auth: false});
    }
  }

  _renderTipsList(tips = []) {
    return (
      tips.map((tip) => {
        return (
          <div className="col-sm-10 offset-sm-1 m-3 mx-auto" key={tip.id}>
            <div className="card">
              <div className="card-header">
                <h6 className="card-title p-0 m-0">#{tip.id}</h6>
              </div>
              <div className="card-body">
                <p>{tip.content}</p>
              </div>
            </div>
          </div>
        )
      })
    );
  }

  render() {
    if (!this.state.auth)
      return (<Redirect to={"/"}/>);

    return (
      <div>
        <h2 className="text-center my-4">Special Developer Tips</h2>
        <hr/>
        {this._renderTipsList(this.state.tips)}
      </div>
    );
  }

}

export default Special;
