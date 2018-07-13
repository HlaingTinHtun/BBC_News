import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import RepoList from './github/RepoList.jsx';

class App extends Component{

  constructor(props){
      super(props);
      this.state = {
        username: 'HlaingTinHtun',
        userData: [],
        userRepos: [],
        perPage: 20
      }
  }

  //Get user data from GitHub
  getUserData(){
    $.ajax({
      url: 'https://newsapi.org/v2/top-headlines?' + 'sources=bbc-news&' + 'apiKey=b85066c9108d4e28b1a9facc922e6148',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userData: data.articles});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, error){
        this.setState({username: null});
        alert(error);
      }.bind(this)
    });
  }

  componentDidMount(){
    this.getUserData();
  }

  render(){
    return(
      <div>
        <RepoList {...this.state} />
      </div>
    )
  }
}

App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};
App.defaultProps = {
  clientId: 'c04e6b51c11fed7ad529',
  clientSecret: 'ec76c26f4b0c75407ac4095939c994f527f8289b',
}

export default App
