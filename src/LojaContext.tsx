import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { stringify } from 'querystring';

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

    const [produtos, setProdutos] = useState<any[]>([]);
    const [carrinhos, setCarrinhos] = useState<any[]>(() => carregarCarrinho());
    const [login, setLogin] = useState(false);


    function carregarCarrinho(): any[] {

        const local = window.localStorage.getItem('carrinho');
        const itens = JSON.parse(local || "[]");

        return itens;

    }

    useEffect(() => {

        if (carrinhos.length >= 1) {
            console.log('carrinhos', carrinhos);
            window.localStorage.setItem('carrinho', JSON.stringify([...carrinhos]));
        }
    }, [carrinhos]);

    useEffect(() => {
        if (carrinhoVisivel) setCarrinhoVisivel(true);
        if (!carrinhoVisivel) {
            setCarrinhoVisivel(false);
        };

        console.log('carrinhoVisivel', carrinhoVisivel)

    }, [carrinhoVisivel, setCarrinhoVisivel]);


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