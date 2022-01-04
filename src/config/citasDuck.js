import axios from "axios";
//CONSTANTES
const INITIAL_STATE = {
    citas: {
        lista: [],
        nombre: ''
    }
}

const INITIAL = 'INITIAL'
const GET_ALL = 'GET_ALL';
const GET_BY_ID = 'GET_BY_ID';

const BASE_URL = 'https://app-citas-sofkau-dairon.herokuapp.com/';
//REDUCERS

export default function citasReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case 'GET_ALL':
            return {
                ...state, citas: {
                    lista: action.payload,
                    nombre: ''
                }

            }

            case 'GET_BY_ID':
                return {
                    ...state, citas: {
                        lista: action.payload,
                        nombre: ''
                    }
                }

            case 'INITIAL':
                return INITIAL_STATE;

            default:
                return state;
    }

}


//ACCIONES

export const getAllAction = () => async (dispatch, getState) => {
    try {

        const response = await axios.get(BASE_URL + 'citasReactivas');
        console.log(response)

        dispatch({
            type: 'GET_ALL',
            payload: response.data
        })

    } catch (error) {
        console.error(error)
        dispatch({
            type: 'INITIAL',
        })
    }
}

export const getByNameAction = (id) => async (dispatch, getState) => {
    try {
        const response = await axios.get(BASE_URL + `citasReactivas/${id}/byidPaciente`)
        console.log(response)
        dispatch({
            type: GET_BY_ID,
            payload: response.data
        })
    } catch (error) {
        console.log("ASdASD")
        dispatch({
            type: 'INITIAL',
        })

    }
}