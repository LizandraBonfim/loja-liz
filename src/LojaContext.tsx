import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

interface Props {
    carrinhoVisivel: boolean;
    setCarrinhoVisivel: Dispatch<SetStateAction<boolean>>;
}

export const LojaContext = createContext<Props>({} as Props);

const ContainerLoja: React.FC = ({ children }) => {

    const [carrinhoVisivel, setCarrinhoVisivel] = useState(false);


    return (
        <LojaContext.Provider value={{
            carrinhoVisivel, setCarrinhoVisivel
        }}>
            {children}
        </LojaContext.Provider>
    )
}

export default ContainerLoja;