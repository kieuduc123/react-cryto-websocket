import {useEffect} from 'react';
import MainLayout from "@/layout/MainLayout.tsx";
import SearchSortBar from "@/components/SearchSortBar/SearchSortBar.tsx";
import ErrorFallback from "@/components/ErrorFallback/ErrorFallback.tsx";
import LoadingSkeleton from "@/components/LoadingSkeleton/LoadingSkeleton.tsx";
import CryptoView from "@/features/Crypto/CrytoView/CrytoView.tsx";
import {useAppDispatch} from "@/redux/hooks.ts";
import {connect} from "@/redux/ws-slice.ts";
import {useCryptoData} from "@/hooks/useCryptoData.tsx";
import {ErrorBoundary} from "react-error-boundary";

const Home = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(connect());
    }, [dispatch]);

    const {
        cryptocurrencies,
        loading,
        error,
        fetchCryptoData,
        searchTerm,
        setSearchTerm,
        sortBy,
        setSortBy,
        sortDirection,
        setSortDirection,
    } = useCryptoData({
        vsCurrency: "usd",
        perPage: 100,
        initialSortBy: "market_cap",
        initialSortDirection: "desc",
    });
    return (
        <MainLayout>
            {/* Hero Section */}
            <div className="mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
                        Chúng tôi đáp ứng tất cả các<br/>
                        nhu cầu giao dịch của bạn
                    </h1>

                    <p className="text-lg text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
                        Địa điểm đáng tin cậy để giao dịch các công cụ chứng khoán và phái sinh được liệt kê giao dịch
                        hợp đồng tương lai
                        dựa trên chỉ số BTC/USDT
                    </p>

                    {/* Email Form chính xác */}
                    <div className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto">
                        <input
                            type="email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập email của bạn"
                            className="flex-1 px-6 py-4 bg-gray-700 text-white placeholder-gray-400 focus:outline-none rounded-l-lg sm:rounded-r-none border-r-0"
                        />
                        <button
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-r-lg sm:rounded-l-none transition-colors">
                            Giao dịch ngay
                        </button>
                    </div>
                </div>
            </div>
{/*<Slider />*/}
            {/* Info section */}
            {/*<section className="px-4 mx-auto grid md:grid-cols-2 gap-8 items-center py-16">*/}
            {/*    <div>*/}
            {/*        <h2 className="text-2xl font-bold text-white mb-3">Nền tảng giao dịch tiên tiến và an toàn nhất</h2>*/}
            {/*        <p className="mb-5 text-gray-300">Tập đoàn trao đổi Nhật Bản, Inc. J.P.X EXCHANGE GROUP được thành*/}
            {/*            lập thông qua*/}
            {/*            sự kết hợp kinh doanh giữa Tập đoàn giao dịch chứng khoán Tokyo và Sở giao dịch chứng khoán*/}
            {/*            Osaka vào ngày 1 tháng 1 năm 2013. Vào ngày 1 tháng 10 năm 2019, J.P.X đã mở rộng kinh doanh*/}
            {/*            sang giao dịch phái sinh hàng hóa bằng cách mua lại Tokyo Commodity Exchange, Inc. J.P.X*/}
            {/*            EXCHANGE GROUP vận hành các công cụ tài chính trao đổi thị trường để cung cấp cho người dùng thị*/}
            {/*            trường những địa điểm đáng tin cậy để giao dịch các công cụ chứng khoán và phái sinh được liệt*/}
            {/*            kê giao dịch hợp đồng tương lai dựa trên chỉ số BTC/USDT</p>*/}
            {/*        <ul className="space-y-2 text-[#63a4ac]">*/}
            {/*            <li>• Dữ liệu thị trường trực tiếp</li>*/}
            {/*            <li>• Gửi tiền và rút tiền linh hoạt</li>*/}
            {/*            <li>• Mua & Bán</li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*    <div className="flex justify-center">*/}
            {/*        /!* Placeholder for video *!/*/}
            {/*        <video width="100%" controls poster="https://ext.same-assets.com/2809342974/1973781778.jpeg">*/}
            {/*            <source src="https://ext.same-assets.com/2809342974/2451159359.mp4" type="video/mp4"/>*/}
            {/*            Trình duyệt của bạn không hỗ trợ video.*/}
            {/*        </video>*/}
            {/*    </div>*/}
            {/*</section>*/}

            <section className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className='flex flex-col gap-4'>


                    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1115]">
                        <div className="h-80 w-full">
                            <img
                                src="https://i.etsystatic.com/39972408/r/il/bdba5a/5342068829/il_1588xN.5342068829_e1ms.jpg"
                                alt="BTC to Work"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-6 border-t border-white/10">
                            <h3 className="text-white text-lg font-semibold mb-2">
                                🚀 Từ Proof of Work đến Put BTC to Work
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Biến Bitcoin nhàn rỗi thành <span
                                className="font-medium text-white">tài sản sinh lời </span>
                                với công nghệ staking tiên phong từ Babylon – an toàn và tối ưu dòng tiền.
                            </p>
                        </div>
                    </article>

                    {/* Card 2 */}
                    <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1115]">
                        <div className="h-56 w-full">
                            <img
                                src="https://images.pexels.com/photos/6780789/pexels-photo-6780789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                alt="Secure and Solid"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="p-6 border-t border-white/10">
                            <h3 className="text-white text-lg font-semibold mb-2">
                                🔒 An toàn. Minh bạch. Vững chắc.
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Mọi giao dịch đều được <span className="font-medium text-white">kiểm toán & lưu ký bởi các tổ chức uy tín</span>,
                                đảm bảo niềm tin tuyệt đối cho nhà đầu tư.
                            </p>
                        </div>
                    </article>
                    </div>
                    {/* Card 1 */}

                    <div className='flex flex-col gap-4'>

                        <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1115]">
                            <div className="h-56 w-full">
                                <img
                                    src="https://media.istockphoto.com/id/1304093999/photo/bitcoin-e-commerce-concept-on-digital-screen.webp?b=1&s=612x612&w=0&k=20&c=hZPJBjf0S9JydFHTBsqIXWr48dPnmyrZhjn3f3nd4kU="
                                    alt="Yields"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6 border-t border-white/10">
                                <h3 className="text-white text-lg font-semibold mb-2">
                                    💹 Lợi nhuận tối đa.
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Phí staking thấp, kết nối với hệ sinh thái DeFi lớn – mang đến
                                    <span className="font-medium text-white"> mức lợi nhuận hàng đầu thị trường</span>.
                                    Niềm tin của bạn được bảo đảm bằng công nghệ và pháp lý hàng đầu.
                                </p>
                            </div>
                        </article>

                        {/* Card 4 */}
                        <article className="overflow-hidden rounded-2xl border border-white/10 bg-[#0f1115]">
                            <div className="h-80 w-full">
                                <img
                                    src="https://images.pexels.com/photos/6772076/pexels-photo-6772076.jpeg"
                                    alt="Built for BTC"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="p-6 border-t border-white/10">
                                <h3 className="text-white text-lg font-semibold mb-2">
                                    ⚡ Xây dựng bởi Bitcoiners.
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Sứ mệnh kết hợp <span className="font-medium text-white">niềm tin Bitcoin & công nghệ Babylon</span>,
                                    kiến tạo hệ sinh thái sinh lời bền vững cho cộng đồng toàn cầu.
                                </p>
                            </div>
                        </article>
                    </div>
                    {/* Card 3 */}
                </div>
            </section>


            <div className="h-auto bg-main p-4">
                <div className=" mx-auto">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-white mb-6">
                            Giá tiền điện tử trực tiếp
                        </h1>

                        <SearchSortBar
                            searchTerm={searchTerm}
                            setSearchTerm={setSearchTerm}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                            sortDirection={sortDirection}
                            setSortDirection={setSortDirection}
                        />
                    </div>

                    <ErrorBoundary
                        FallbackComponent={ErrorFallback}
                        onReset={fetchCryptoData}
                    >
                        {loading ? (
                            <LoadingSkeleton/>
                        ) : error ? (
                            <div className="text-red-500 text-center">{error}</div>
                        ) : (
                            <CryptoView
                                data={cryptocurrencies}
                                searchTerm={searchTerm}
                                sortBy={sortBy}
                                sortDirection={sortDirection}
                            />
                        )}
                    </ErrorBoundary>
                </div>
            </div>
            {/* Live price section */}


            {/* Features grid section */}
            <section className=" py-16">
                <div className="container max-w-5xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-10">Dưới đây là một số lý do tại sao bạn
                        nên chọn J.P.X EXCHANGE GROUP</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className=" rounded-xl p-7 text-center">
                            <h3 className="font-bold text-white mb-2">Bảo đảm quyền lợi</h3>
                            <p className="text-gray-300">Chúng tôi luôn ưu tiên quyền lợi khách hàng đặt lên hàng đầu trong tất cả các danh mục
                                đầu tư</p>
                        </div>
                        <div className=" rounded-xl p-7 text-center">
                            <h3 className="font-bold text-white mb-2">Lưu trữ an toàn</h3>
                            <p className="text-gray-300">Với chúng tôi, sự thành công vươn mình làm định chế hàng đầu châu á xuất phát từ tin
                                tưởng đồng hành của nhà đầu tư</p>
                        </div>
                        <div className=" rounded-xl p-7 text-center">
                            <h3 className="font-bold text-white mb-2">Hỗ trợ tốt nhất</h3>
                            <p className="text-gray-300">Nhận trả lời trong vòng chưa đầy một phút trong trò chuyện trực tiếp hoặc lên lịch gọi
                                lại</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Numbers row */}
            <section className="py-12">
                <div className="container max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white">657 tỷ đô la</h2>
                        <p className="text-[#b4b4b0]">Khối lượng giao dịch hàng quý</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">100+</h2>
                        <p className="text-[#b4b4b0]">Các quốc gia được hỗ trợ</p>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-white">56+M</h2>
                        <p className="text-[#b4b4b0]">Người dùng đã xác minh</p>
                    </div>
                </div>
            </section>

            {/* Steps section */}
            <section className=" py-16">
                <div className="container max-w-4xl mx-auto">
                    <h2 className="text-2xl font-bold text-white text-center mb-8">Bắt đầu trong vài bước</h2>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                        <div className=" p-6 rounded-xl flex flex-col items-center"><span
                            className="text-xl font-bold w-10 h-10 bg-[#057bf9] text-white rounded-full flex items-center justify-center mb-2">1</span>
                            <h3 className="font-bold mb-1 text-white">Tạo một tài khoản</h3></div>
                        <div className=" p-6 rounded-xl flex flex-col items-center"><span
                            className="text-xl font-bold w-10 h-10 bg-[#057bf9] text-white rounded-full flex items-center justify-center mb-2">2</span>
                            <h3 className="font-bold mb-1 text-white">Liên kết tài khoản ngân hàng của bạn</h3></div>
                        <div className=" p-6 rounded-xl flex flex-col items-center"><span
                            className="text-xl font-bold w-10 h-10 bg-[#057bf9] text-white rounded-full flex items-center justify-center mb-2">3</span>
                            <h3 className="font-bold mb-1 text-white">Bắt đầu mua và bán</h3></div>
                    </div>
                </div>
            </section>

            {/* Banner CTA */}
            <section className="relative py-16 bg-cover bg-no-repeat text-center"
                     style={{backgroundImage: 'url(https://ext.same-assets.com/2809342974/1973781778.jpeg)'}}>
                <div className="bg-[#15151cbb] backdrop-blur-md py-16 rounded-xl max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-5 text-white">Bắt đầu tăng thu nhập ngay hôm
                        nay</h2>
                    <a className="btn-1 px-8 py-3 text-lg cursor-pointer text-gray-300">Bắt đầu</a>
                </div>
            </section>

            {/* Footer */}
        </MainLayout>
    );
};

export default Home;