import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import key from '../config/youtube.js';
// Seed Data:
// import videos from '../data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {
        id: {videoId: ''},
        snippet: {
          title: '',
          description: '',
          thumbnails: {
            default: {url: ''}
          }
        }
      },
      videos: []
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.debouncedRequest = _.debounce(input => this.makeRequest.call(this, input), 500);
  }

  componentDidMount() {
    var options = {
      query: 'react',
      max: 5,
      key
    };
    this.props.searchYouTube(options, videos => {
      this.setState({
        currentVideo: videos[0],
        videos
      });
    });
  }

  makeRequest(input) {
    console.log('Input: ', input);
    var options = {
      query: input,
      max: 5,
      key
    };
    this.props.searchYouTube(options, videos => {
      this.setState({
        currentVideo: videos[0],
        videos
      });
    });
  }

  handleClick(video) {
    this.setState({
      currentVideo: video,
      videos
    });
  }

  handleChange(input) {
    this.debouncedRequest(input);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleChange={this.handleChange}/>
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
