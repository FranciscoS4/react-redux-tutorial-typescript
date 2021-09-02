export function toggleLesson(module: any, lesson: any ) {
  return {
    type: 'TOGGLE_LESSON',
    module,
    lesson,
  };
}