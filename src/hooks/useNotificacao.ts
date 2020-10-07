import { useCallback } from "react";

interface Response {


    success: (message: string) => void;

}

function useNotificacao() {
    const success = useCallback(async () => {


    }, []);
}

export default useNotificacao;