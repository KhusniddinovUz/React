const initState = {
  projects: [
    { id: 1, title: 'Help me find peach', content: 'blah blah blah' },
    { id: 2, title: 'Drink water', content: 'drink water water water' },
    { id: 3, title: 'Egg hunt with Mirzo', content: 'vayy musreee' },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('Created project', action.project);
      break;
    default:
      return state;
  }
  return state;
};
export default projectReducer;
