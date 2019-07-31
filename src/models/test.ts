type stateType = {
  text: string
}
type actionsType = {
  modify: any
}

const TestModel: ModelType<stateType, actionsType> = {
  state: {
    text: 'hello world'
  },
  actions: {
    modify (state, actions, text: string) {
      return state => {
        state.text = text
      }
    },
  }
}

export default TestModel