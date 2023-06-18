import { useReducer } from 'react'
import { data } from '../../../data'

// on préferera partir sur des variables pour éviter des erreurs, fautes de saisies
const CLEAR_LIST = 'CLEAR_LIST'
const RESET_LIST = 'RESET_LIST'
const REMOVE_ITEM = 'REMOVE_ITEM'

const defaultState = {
  people: data,
}

const reducer = (state, action) => {
  console.log(action)
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] }
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data }
  }

  // Si l'action ne correpond à aucune des conditions
  // return state
  // on peut retourner une erreur (type d'action ne match pas) si nous n'attrapons pas le réducteur
  throw new Error(`No Matching "${action.type}" - action type`)
}

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  const removeItem = (id) => {}

  const clearList = () => {
    dispatch({ type: CLEAR_LIST })
  }
  const resetList = () => {
    dispatch({ type: RESET_LIST })
  }

  return (
    <div>
      {/* switch to state */}
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {/* switch to state */}

      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          clear
        </button>
      )}
      <button className="btn" style={{ marginTop: '2rem' }} onClick={resetList}>
        reset
      </button>
    </div>
  )
}

export default ReducerBasics
