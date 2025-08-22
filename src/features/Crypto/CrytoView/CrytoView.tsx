import React, { useMemo } from "react";
import type { SortDir, SortKey } from "@/hooks/useCryptoData";
import CryptoCard from "@/features/Crypto/CrytoView/CryptoCard.tsx";

type Props = {
    data: any[];
    searchTerm: string;
    sortBy: SortKey;
    sortDirection: SortDir;
};

const CryptoView: React.FC<Props> = ({
                                         data,
                                         searchTerm,
                                         sortBy,
                                         sortDirection,
                                     }) => {
    const filteredAndSorted = useMemo(() => {
        const term = searchTerm.trim().toLowerCase();

        const filtered = term
            ? data.filter(
                (c: any) =>
                    c.name?.toLowerCase().includes(term) ||
                    c.symbol?.toLowerCase().includes(term)
            )
            : data;

        const multiplier = sortDirection === "desc" ? -1 : 1;

        return filtered.slice().sort((a: any, b: any) => {
            switch (sortBy) {
                case "price":
                    return (a.current_price - b.current_price) * multiplier;
                case "change":
                    return (
                        (a.price_change_percentage_24h - b.price_change_percentage_24h) *
                        multiplier
                    );
                default:
                    // market_cap
                    return (a.market_cap - b.market_cap) * multiplier;
            }
        });
    }, [data, searchTerm, sortBy, sortDirection]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            {filteredAndSorted.splice(0,12).map((crypto: any) => (
                <CryptoCard key={crypto.id} crypto={crypto} />
            ))}
        </div>
    );
};

export default CryptoView;
