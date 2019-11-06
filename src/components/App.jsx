import VideoList from './VideoList.js';
import videos from '../data/exampleVideoData.js';
import VideoPlayer from './VideoPlayer.js';
import key from '../config/youtube.js';

console.log('Videos: ', videos);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: videos[0],
      videos: videos
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(video) {
    this.setState({
      currentVideo: video,
      videos
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList handleClick={this.handleClick} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    );
  }
}
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
