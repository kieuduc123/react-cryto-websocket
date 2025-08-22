import React from "react";
import { FiSearch } from "react-icons/fi";
import { BiSort } from "react-icons/bi";
import type { SortDir, SortKey } from "@/hooks/useCryptoData";

type Props = {
    searchTerm: string;
    setSearchTerm: (v: string) => void;
    sortBy: SortKey;
    setSortBy: (v: SortKey) => void;
    sortDirection: SortDir;
    setSortDirection: (v: SortDir) => void;
};

const SearchSortBar: React.FC<Props> = ({
                                            searchTerm,
                                            setSearchTerm,
                                            sortBy,
                                            setSortBy,
                                            sortDirection,
                                            setSortDirection,
                                        }) => {
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search cryptocurrencies..."
                    className="w-full bg-gray-800 text-white rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div className="flex items-center space-x-4">
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortKey)}
                    className="bg-gray-800 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="market_cap">Market Cap</option>
                    <option value="price">Price</option>
                    <option value="change">24h Change</option>
                </select>

                <button
                    onClick={() =>
                        setSortDirection(sortDirection === "desc" ? "asc" : "desc")
                    }
                    className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors"
                    title={`Sort: ${sortDirection.toUpperCase()}`}
                >
                    <BiSort className="text-white text-xl" />
                </button>
            </div>
        </div>
    );
};

export default SearchSortBar;
