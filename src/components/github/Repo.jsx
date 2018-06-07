import React,{Component} from 'react';

class Repo extends Component{

  render(){
    const {repo} = this.props;
    return(
      <li className="list-group-item">
        <a href={repo.html_url}>
          {repo.name}
        </a> : {repo.description}
      </li>
    )

    // const CountryList = ({countries = []}) => (
    //   <div>
    //     This is the country list: <br/>
    //     <ul>
    //       {countries.map((_id, country) => (
    //         <li key={_id}>
    //           <h3>{country}</h3>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // );
  }
}

export default Repo
