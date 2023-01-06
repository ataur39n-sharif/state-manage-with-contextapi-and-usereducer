import { createContext, useContext, useReducer } from "react";
import { formReducer, initialState } from "../state/formReducer";

const FORMDATA_CONTEXT = createContext()

const FormDataProvider = ({ children }) => {
    const [state, dispatch] = useReducer(formReducer, initialState)
    const value = {
        state, dispatch
    }
    return (
        <FORMDATA_CONTEXT.Provider value={value}>
            {children}
        </FORMDATA_CONTEXT.Provider>
    )
}

export const formData = () => {
    const context = useContext(FORMDATA_CONTEXT)
    return context
}

export default FormDataProvider