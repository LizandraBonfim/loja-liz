import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

interface Props {
    carrinhoVisivel: boolean;
    setCarrinhoVisivel: Dispatch<SetStateAction<boolean>>;
    setProdutos: Dispatch<SetStateAction<any[]>>;
    produtos: any[];
    login: boolean;
    setLogin: Dispatch<SetStateAction<boolean>>;
}

export const LojaContext = createContext<Props>({} as Props);

const ContainerLoja: React.FC = ({ children }) => {

    const [carrinhoVisivel, setCarrinhoVisivel] = useState(false);
    // const [restaurante, setRestaurante] = useState();

    const [produtos, setProdutos] = useState<any[]>([]);
    const [login, setLogin] = useState(false);



    return (
        <LojaContext.Provider value={{
            carrinhoVisivel,
            setCarrinhoVisivel,
            produtos,
            setProdutos,
            login,
            setLogin
        }}>
            {children}
        </LojaContext.Provider>
    )
}

export default ContainerLoja;