import React, { createContext, useState, Dispatch, SetStateAction } from 'react';

interface Props {
    setCarrinhoVisivel: Dispatch<SetStateAction<boolean>>;
    setProdutos: Dispatch<SetStateAction<any[]>>;
    setLogin: Dispatch<SetStateAction<boolean>>;
    setCarrinhos: Dispatch<SetStateAction<any[]>>;
    carrinhoVisivel: boolean;
    carrinhos: any[];
    produtos: any[];
    login: boolean;
}

export const LojaContext = createContext<Props>({} as Props);

const ContainerLoja: React.FC = ({ children }) => {

    const [carrinhoVisivel, setCarrinhoVisivel] = useState(false);
    // const [restaurante, setRestaurante] = useState();

    const [produtos, setProdutos] = useState<any[]>([]);
    const [carrinhos, setCarrinhos] = useState<any[]>([]);
    const [login, setLogin] = useState(false);



    return (
        <LojaContext.Provider value={{
            carrinhoVisivel,
            setCarrinhoVisivel,
            produtos,
            setProdutos,
            login,
            setLogin,
            setCarrinhos,
            carrinhos
        }}>
            {children}
        </LojaContext.Provider>
    )
}

export default ContainerLoja;