import React from 'react';

import { connect } from 'react-redux';

const Video = ( props: any ) => {
  const {activeModule, activeLesson} = props;
  
  return(
    <div>
      <strong>Módulo {activeModule.title}</strong>
      <p> Aula {activeLesson.title}</p>
    </div>
  )
}


export default connect((state: { course: any }) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);


