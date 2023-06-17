import { createContext, useContext, useState } from 'react'

// Creation du context global
const GlobalContext = createContext()

// Paramètrer le custom Hook et l'exporter - GlobalContext étant le context dont nous voulons avoir accès
export const useGlobalContext = () => useContext(GlobalContext)

// Creation de l'Appcontext

const AppContext = ({ children }) => {
  // Creation des states
  const [name, setName] = useState('Bamba')
  // retourner le founisseur du context global avec ses props (un objet ici)
  // Objectif, les autres composants aient accès à name et setName
  return (
    <GlobalContext.Provider value={{ name, setName }}>
      {children}
    </GlobalContext.Provider>
  )
}

// on export par défaut l'AppContext

export default AppContext
