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
    setProdutosAdicionados: Dispatch<SetStateAction<any[]>>;
    produtosAdicionados: any[];
}

export const LojaContext = createContext<Props>({} as Props);

const ContainerLoja: React.FC = ({ children }) => {

    const [carrinhoVisivel, setCarrinhoVisivel] = useState(false);
    // const [restaurante, setRestaurante] = useState();

    const [produtos, setProdutos] = useState<any[]>([]);
    const [carrinhos, setCarrinhos] = useState<any[]>([]);
    const [login, setLogin] = useState(false);
    const [produtosAdicionados, setProdutosAdicionados] = useState<any[]>([]);

    useEffect(() => {

        if (carrinhos.length >= 1) {
            console.log('[...carrinhos, carrinhos]', [...carrinhos]);
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

    useEffect(() => {

        async function possuiItensCarrinho() {

            const local = window.localStorage.getItem('carrinho');
            const itens = JSON.parse(local || "[]");
            if (local) setProdutosAdicionados(itens);

            console.log('produtosAdicionadosprodutosAdicionados', produtosAdicionados);
            if (!!!local)
                return;

        }

        possuiItensCarrinho();


    }, [carrinhos]);



    return (
        <LojaContext.Provider value={{
            carrinhoVisivel,
            setCarrinhoVisivel,
            setProdutosAdicionados,
            produtosAdicionados,
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