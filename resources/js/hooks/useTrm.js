import { useEffect, useState } from "react";
import { trmApi } from "@/services/Api/trmApi";

export function useTrm() {
    const [priceDollar, setPriceDollar] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPriceDollar = async () => {
            try {
                setLoading(false);
                const { valores } = await trmApi();
                setPriceDollar(valores);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        getPriceDollar();
    }, []);

    const sendValues = priceDollar
        .slice(0, 30)
        .sort((a, b) => new Date(a.vigenciahasta) - new Date(b.vigenciahasta));

    return { valores: sendValues, loading, error };
}
