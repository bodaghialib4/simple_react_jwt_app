import React, {Component} from 'react';
import {getRegularTips} from "../repository";

class Regular extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tips: []
    };
  }

  componentDidMount() {
    getRegularTips().then((tips) => {
      this.setState({tips});
    });
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
    return (
      <div>
        <h2 className="text-center my-4">Regular Developer Tips</h2>
        <hr/>
        {this._renderTipsList(this.state.tips)}
      </div>
    )
  }

}

export default Regular;
