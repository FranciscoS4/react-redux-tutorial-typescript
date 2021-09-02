import React from 'react';

import { connect } from 'react-redux';

const Video = ({activeModule} : {activeModule:any}, {activeLesson} : {activeLesson: any} ) => (
  <div>
    <strong>Módulo {activeModule.title}</strong>
    <p> Aula {activeLesson.title}</p>
  </div>
);

export default connect((state: { course: { activeModule: any; activeLesson: any}; }) => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson,
}))(Video);