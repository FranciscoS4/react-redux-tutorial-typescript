const INITIAL_STATE = {
  activeLesson: {
    title: ""
  },
  activeModule: {
    title: ""
  },
    modules: [
      {
        id: 1, 
        title: 'Iniciando com React', 
        lessons:[
          { id: 1, title: 'Primeira aula'},
          { id: 2, title: 'Segunda aula'},
        ]
      },
      {
        id: 2, 
        title: 'Aprendendo Redux', 
        lessons:[
          { id: 3, title: 'Terceira aula'},
          { id: 4, title: 'Quarta aula'},
        ]
      }
    ]
}

export default function course(state = INITIAL_STATE, action: { type: string; lesson: any; module: any; }) {
  console.log(action);
  if (action.type === 'TOGGLE_LESSON') {
    return { 
      ...state, 
      activeLesson: action.lesson, 
      activeModule: action.module
    };
  }
  return state;
}