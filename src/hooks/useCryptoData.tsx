import { useCallback, useEffect, useState } from "react";
import axios from "axios";

export type SortKey = "market_cap" | "price" | "change";
export type SortDir = "asc" | "desc";

export interface UseCryptoDataOptions {
    vsCurrency?: string;
    perPage?: number;
    initialSortBy?: SortKey;
    initialSortDirection?: SortDir;
}

export function useCryptoData({
                                  vsCurrency = "usd",
                                  perPage = 100,
                                  initialSortBy = "market_cap",
                                  initialSortDirection = "desc",
                              }: UseCryptoDataOptions = {}) {
    const [cryptocurrencies, setCryptocurrencies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState<SortKey>(initialSortBy);
    const [sortDirection, setSortDirection] =
        useState<SortDir>(initialSortDirection);

    const fetchCryptoData = useCallback(async () => {
        try {
            setLoading(true);
            const res = await axios.get(
                "https://api.coingecko.com/api/v3/coins/markets",
                {
                    params: {
                        vs_currency: vsCurrency,
                        order: "market_cap_desc",
                        per_page: perPage,
                        sparkline: false,
                    },
                }
            );
            setCryptocurrencies(res.data);
            setError(null);
        } catch {
            setError("Failed to fetch cryptocurrency data. Please try again.");
        } finally {
            setLoading(false);
        }
    }, [vsCurrency, perPage]);

    useEffect(() => {
        fetchCryptoData();
    }, [fetchCryptoData]);

    return {
        // data
        cryptocurrencies,
        loading,
        error,

        // controls
        fetchCryptoData,
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        sortDirection,
        setSortDirection,
    };
}
