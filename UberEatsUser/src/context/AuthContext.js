import { createContext, useState, useEffect, useContext } from "react";
import { Auth, DataStore } from "aws-amplify";
import { User } from "../models";

const AuthContext = createContext({

})

const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null)
    const [dbUser, setDbUser] = useState(null)

    useEffect(() => {
        // bypassCache is to make this request from the server, not take it from the cache. its more secure
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser)
    }, [])

    useEffect(() => {
        DataStore.query(User, user => user.sub.eq(sub)).then((users) => setDbUser(users[0]))
    }, [sub])

    const sub = authUser?.attributes?.sub

    return (
        <AuthContext.Provider value={{ authUser, dbUser, sub, setDbUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider

export const useAuthContext = () => useContext(AuthContext)