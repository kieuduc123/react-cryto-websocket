import React, { ReactNode } from "react";

type MainLayoutProps = {
    children?: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    return (
        <>
            {/* Navbar */}
            <div className=' border-b border-border-main sticky top-0 z-30 bg-main'>

            <header className=" w-full max-w-[1472px] mx-auto navbar flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                    {/* Logo */}
                    <img
                        src="https://ext.same-assets.com/2809342974/1756781965.png"
                        alt="JPX Logo"
                        className="h-9 w-auto"
                    />
                    {/* Main nav */}
                    <nav className="hidden md:flex gap-7 ml-8 text-[#b4b4b0] font-medium text-white">
                        <a className="nav-link cursor-pointer">Trang chủ</a>
                        <a className="nav-link cursor-pointer">Giao dịch</a>
                        <a className="nav-link cursor-pointer">Máy đào</a>
                        <a
                            className="nav-link cursor-pointer"
                            href="https://t.me/CSKHJPXEXCHANGE247"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CSKH
                        </a>
                    </nav>
                </div>
                {/* Auth */}
                <div className="flex gap-3">
                    <a className="text-white flex items-center border border-blue-500 hover:bg-blue-500 px-4 py-[5px] rounded-lg cursor-pointer">
                        Đăng nhập
                    </a>
                    <a className="bg-blue-500 px-4 flex items-center py-2 rounded-lg cursor-pointer text-white">
                        Đăng ký
                    </a>
                </div>
            </header>

            {/* Nội dung chính */}
            </div>
            <div className="max-w-[1472px] mx-auto">{children}</div>

            {/* Footer */}
            <footer className="landing-footer bg-[#181824] px-6 py-6">
                <div className="max-w-[1472px] mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-5">
                    <div>
                        <img
                            src="https://ext.same-assets.com/2809342974/1756781965.png"
                            alt="JPX Logo"
                            className="h-8 w-auto"
                        />
                    </div>
                    <ul className="flex gap-6 text-[#b4b4b0] font-medium">
                        <li>
                            <a>Giao dịch</a>
                        </li>
                        <li>
                            <a>Thị trường</a>
                        </li>
                        <li>
                            <a>Hồ sơ cá nhân</a>
                        </li>
                        <li>
                            <a>Ví</a>
                        </li>
                        <li>
                            <a>Cài đặt</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default MainLayout;
