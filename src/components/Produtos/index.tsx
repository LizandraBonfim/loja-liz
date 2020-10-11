import React, { useContext, useEffect } from 'react';
import Produto from './Produto';
import { ProdutosCard } from './styles';
import { LojaContext } from '../../LojaContext';
import Loading from '../Loading';
import { toast } from 'react-toastify';
import api from '../../service/api';

const Produtos: React.FC = () => {

    const { produtos, setProdutos, setLoading, loading } = useContext(LojaContext);


    useEffect(() => {
        async function getData() {
            try {

                setLoading(true);

                const response = await api.get('/produtos');
                const json = await response.data;
                setLoading(false);
                setProdutos(json);

                return;
            } catch (error) {
                toast.dark('Ocorreu um erro.');
                setLoading(false);

                return;

            }
        };

        getData()
    }, []);


    if (loading) return <Loading />
    if (!produtos) return null;

    return (

        <ProdutosCard>

            {produtos.map(item => (
                <Produto
                    key={item.id}
                    item={item}
                />
            ))}

        </ProdutosCard>

    );
}

export default Produtos;