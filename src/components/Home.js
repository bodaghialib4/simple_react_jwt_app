import react, {Component} from 'react';

class Home extends Component {

  render() {
    return (
      <div>
        <hr/>
        <h1 className="text-center"> Welcome Developer Tips</h1>
        <div>
          <h3 className="text-center pt-2">Get New Tips here</h3>
          <p className="text-center pt-5"> This App is only for getting familiar with JWT in ReactJS.</p>
          <p className="text-center"> Developed By ALi Bodaghi</p>
        </div>
        <hr/>
      </div>
    );
  }
}

export default Home;
