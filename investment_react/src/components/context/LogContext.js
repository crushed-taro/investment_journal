import React, { createContext, useContext } from "react";

const LogContext = createContext();

export const LogProvider = ({ children }) => {

    const log = (message, obj = null) => {
        if (process.env.NODE_ENV === "development") {
            if(obj) {
                console.log(message, obj);
            } else {
                console.log(message);
            }
        }
    };

    return (
        <LogContext.Provider value={log}>
            {children}
        </LogContext.Provider>
    );
};

export const useLog = () => useContext(LogContext);