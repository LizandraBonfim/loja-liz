import { Dispatch, SetStateAction } from "react";

export default class Utils {

    public static BotaoAdicionarCarrinho(item: any, carrinhos: any[], setCarrinhos: Dispatch<SetStateAction<any[]>>) {

        const indexProduto = carrinhos.findIndex(x => x.id === item.id);

        if (indexProduto === -1) {

            item.qtd = 1;
            item.subtotal = item.price;

            setCarrinhos((itens) => [...itens, item]);
            console.log('item', carrinhos)
            return;
        }

        let produto = carrinhos[indexProduto];
        produto.qtd += 1;
        produto.subtotal = produto.qtd * produto.price;

        carrinhos[indexProduto] = produto;

        setCarrinhos(x => [...carrinhos]);

        return;
    }

};

