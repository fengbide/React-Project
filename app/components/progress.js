import React from 'react'
import './progress.less'

let Progress = React.createClass({
  changeProgress(e){
    let progressBar = this.refs.propgressBar;
    let progress = (e.clienx-progressBar.getBoundingClientRect().left)/ progressBar.clienWidth;
  },
  render (){
    return (
      <div className="components-progress row" ref="progressBar">
          <div className='progress' style={{width:`${this.props.progress}%`}}></div>
     </div>
    );
  }
});

export default Progress;
