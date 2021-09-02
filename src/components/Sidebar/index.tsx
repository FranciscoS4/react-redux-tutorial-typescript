import React from 'react';

import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';

import * as CourseActions from '../../store/actions/course';

const Sidebar = ({modules} : {modules:any}, {toggleLesson} : {toggleLesson: any} ) => (
  <aside>
    { modules.map((module:any) => (
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
);

const mapStateToProps = (state: { course: { modules: any; }; }) => ({
  modules: state.course.modules
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => 
  bindActionCreators(CourseActions, dispatch);

export default connect( mapStateToProps, mapDispatchToProps)(Sidebar);