import React from 'react';

import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import * as CourseActions from '../../store/actions/course';

const Sidebar = ( props: any ) => {
  const {modules, toggleLesson} = props;
  return (
    <aside>
    { modules.map((module: any) => (
      <div key={module.id}>
        <strong>{module.title}</strong>
        <ul>
          {module.lessons.map((lesson: any) => (
            <li key={lesson.id}>
              {lesson.title}
              <button 
                onClick={() => toggleLesson(module, lesson)}
              >
                Selecionar
              </button>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </aside>
  )
};

const mapStateToProps = (state: { course: any}) => ({
  modules: state.course.modules
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => 
  bindActionCreators(CourseActions, dispatch);

export default connect( mapStateToProps, mapDispatchToProps)(Sidebar);