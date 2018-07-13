import React,{Component} from 'react';

class Repo extends Component{

  render(){
    const {repo} = this.props;
    return(
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title"><strong>{repo.title}</strong></h3>
        </div>
        <div className="panel-body">
        <div  className="row">
          <div className="col-md-4">
            <img src={repo.urlToImage} style={{width:"52%",margin:"3px"}} />
          </div>

          <div className="col-md-8">
            <div  className="row">
              <div className="col-md-12">
                <strong>AUTHOR : </strong>{this.repo}
              </div>
            </div>
            <hr />
            <div  className="row">
              <div className="col-md-12">
                  <li><strong>Description : </strong>{repo.description}</li>
                  <li><strong>Published At : </strong>{repo.publishedAt}</li>
              </div>
            </div>
            <br />
            <a className="btn btn-primary" target="_blank" href={repo.url}>Read More</a>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Repo
