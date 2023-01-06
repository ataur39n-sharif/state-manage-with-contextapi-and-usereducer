import { useEffect } from "react"
import { formData } from "../../context/formDataProvider"
import { actionTypes } from "../../state/actionTypes"

const TempForm = () => {
    const { state, dispatch } = formData()

    useEffect(() => {
        if (state?.loading) {
            setTimeout(() => {
                dispatch({ type: actionTypes.HIDE_LOADING })
            }, 1500);
        }
    }, [state])

    const handleChange = (name, value) => {
        dispatch({ type: actionTypes.CHANGING_DATA, payload: { name, value } })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: actionTypes.SUBMIT_DATA })
    }

    // console.log(state);

    return (
        <div>
            <div style={{ padding: '50px' }}>

                {
                    state?.loading && <p>Data updating.......</p>
                }

            </div>
            <form onSubmit={handleSubmit}>
                <div style={{ padding: '10px' }}>
                    <label htmlFor="full-name">First name : </label>
                    <input type="text" name="firstName" placeholder="" id="full-name" onChange={(e) => handleChange(e.target.name, e.target.value)} />
                </div>
                <div style={{ padding: '10px' }}>
                    <label htmlFor="last-name">Last name : </label>
                    <input type="text" name="lastName" placeholder="" id="last-name" onChange={(e) => handleChange(e.target.name, e.target.value)} />
                </div>
                <div style={{ padding: '10px' }}>
                    <label htmlFor="email">Email : </label>
                    <input type="email" name="email" placeholder="" id="email" onChange={(e) => handleChange(e.target.name, e.target.value)} />
                </div>
                <div style={{ padding: '10px' }}>
                    <label htmlFor="password">Password : </label>
                    <input type="password" name="password" placeholder="" id="password" onChange={(e) => handleChange(e.target.name, e.target.value)} />
                </div>
                <div style={{ padding: '10px' }}>
                    <label htmlFor="gender">Gender : </label>
                    <select name="gender" id="gender" onChange={(e) => handleChange(e.target.name, e.target.value)}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div style={{ padding: '10px' }}>
                    <input type="checkbox" name="agreeWithTerms" id="agree" onChange={(e) => handleChange(e.target.name, e.target.checked)} />
                    <label htmlFor="agree"> Agree with terms </label>
                </div>
                <div style={{ padding: '10px' }}>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default TempForm