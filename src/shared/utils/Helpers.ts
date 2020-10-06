import { Dispatch, SetStateAction } from "react";

export default class Utils {

    public static BotaoAdicionarCarrinho(item: any, carrinhos: any[], setCarrinhos: (itens: any[]) => void) {

        const indexProduto = carrinhos.findIndex(x => x.id === item.id);

        if (indexProduto === -1) {

            item.qtd = 1;
            item.subtotal = item.price;
            console.log([...carrinhos, item], '[...carrinhos, item]')
            setCarrinhos([...carrinhos, item]);
            console.log('item', carrinhos)
            return;
        }

        let produto = carrinhos[indexProduto];

        produto.qtd += 1;
        produto.subtotal = produto.qtd * produto.price;

        console.log('subtotal', produto.subtotal);

        carrinhos[indexProduto] = produto;

        setCarrinhos([...carrinhos]);

        return;
    }

    public static Valores(produto: any) {
        const price = produto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        return price;

    }

    public static Subtotal(produtos: any) {
        const values = produtos
            .map((e: any) => e.subtotal)
            .reduce((a: any, b: any) => a + b);

        Utils.Valores(values)


        return values;
    }

    public static AumentaQuantidade(item: any, produtos: any[], setCarrinhos: (itens: any[]) => void) {
        const produtoIndex = produtos.findIndex((x: any) => x.id === item.id);

        if (produtoIndex !== -1) {

            produtos[produtoIndex].qtd += 1;
            setCarrinhos([...produtos]);

            let produto = produtos[produtoIndex];

            produto.subtotal = produto.qtd * produto.price;

            produtos[produtoIndex] = produto;
        }

        // setMessage({ message: `Item ${item.id} adicionado.` });
    }


    public static DiminuiQuantidade(item: any, produtos: any[], setCarrinhos: (itens: any[]) => void) {

        debugger
        const produtoIndex = produtos.findIndex((x: any) => x.id === item.id);

        if (produtos[produtoIndex].qtd === 1) {
            Utils.ExcluirItemDoCarrinho(item, produtos, setCarrinhos);
            return;
        }
        if (produtoIndex !== -1) {



            produtos[produtoIndex].qtd -= 1;
            setCarrinhos([...produtos]);

            let produto = produtos[produtoIndex];

            produto.subtotal = produto.qtd * produto.price;

            produtos[produtoIndex] = produto;
        }

        // setMessage({ message: `Item ${item.id} adicionado.` });
    }


    public static ExcluirItemDoCarrinho(item: any, produtos: any[], setCarrinhos: (itens: any[]) => void) {

        const produtoIndex = produtos.findIndex((x: any) => x.id === item.id);

        // produtos.slice(produtoIndex, 1);
        const filtered = [...produtos].filter(x => x.id !== item.id);
        setCarrinhos(filtered);
        // setCarrinhos(x => [...produtos].filter(x => x.id !== item.id));


    }


};

