import React, { createContext, useState, Dispatch, SetStateAction, useEffect } from 'react';
import { stringify } from 'querystring';

interface Props {
    setCarrinhoVisivel: Dispatch<SetStateAction<boolean>>;
    setProdutos: Dispatch<SetStateAction<any[]>>;
    setLogin: Dispatch<SetStateAction<boolean>>;
    setCarrinhos: (carrinho: any[]) => void;
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

    function AtualizarCarrinho(carrinho: any) {
        debugger
        setCarrinhos(carrinho);
        // AtualizarLocalStorage();
    }

    function AtualizarLocalStorage() {
        window.localStorage.setItem('carrinho', JSON.stringify([...carrinhos]));
        // if (carrinhos.length >= 1) {
        //     console.log('carrinhos', carrinhos);
        // }
    }

    useEffect(() => {

        window.localStorage.setItem('carrinho', JSON.stringify([...carrinhos]));

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
            setCarrinhos: AtualizarCarrinho,
            carrinhos
        }}>
            {children}
        </LojaContext.Provider>
    )
}

export default ContainerLoja;