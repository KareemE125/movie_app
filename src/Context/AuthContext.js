const { createContext, useState } = require("react");


export let AuthContext = createContext(false);

export default function AuthContextProvider(props)
{
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function changeAuthStauts(flag)
    {
        setIsLoggedIn(flag);
    }

    return <AuthContext.Provider value={{isLoggedIn,changeAuthStauts}}>
        {props.children}
    </AuthContext.Provider>
}