import { createContext } from 'react';

export const Context = createContext();

export default function Store(props)  {

    return (
    	<Context.Provider ></Context.Provider>
    )
}