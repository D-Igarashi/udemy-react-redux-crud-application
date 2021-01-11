import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const READ_EVENT = 'READ_EVENT'
export const UPDATE_EVENT = 'UPDATE_EVENT'

const ROOT_URL = "https://udemy-utils.herokuapp.com/api/v1"
const QUARYSTRING = "?token=token123"

export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUARYSTRING}`)
    dispatch({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUARYSTRING}`, values)
    dispatch({ type: CREATE_EVENT, response })
}

export const deleteEvent = id => async dispatch => {
    await axios.delete(`${ROOT_URL}/events/${id}${QUARYSTRING}`)
    dispatch({ type: DELETE_EVENT, id })
}

export const getEvent = id => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events/${id}${QUARYSTRING}`)
    dispatch({ type: READ_EVENT, response })
}

export const putEvent = values => async dispatch => {
    const response = await axios.put(`${ROOT_URL}/events/${values.id}${QUARYSTRING}`, values)
    dispatch({ type: UPDATE_EVENT, response })
}