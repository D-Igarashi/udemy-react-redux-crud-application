import { INCREMENT, DECREMENT } from '../actions'

const initialState = { value: 0 }

export default (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { value: state.varue + 1 }
        case DECREMENT:
            return { value: state.varue - 1 }
            defaurt:
            return state
    }
}