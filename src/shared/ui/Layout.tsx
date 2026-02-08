
import { Outlet, Link, useLocation } from "react-router-dom";

export const Layout = () => {
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900 pb-16">
            <main className="flex-1 w-full max-w-md mx-auto bg-white min-h-screen shadow-lg overflow-y-auto">
                <Outlet />
            </main>

            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 px-6 py-3 flex justify-between items-center max-w-md mx-auto">
                <NavLink to="/" label="홈" active={isActive("/")} />
                <NavLink to="/market" label="거래소" active={isActive("/market")} />
                <NavLink to="/portfolio" label="포트폴리오" active={isActive("/portfolio")} />
                <NavLink to="/analysis" label="분석" active={isActive("/analysis")} />
            </nav>
        </div>
    );
};

const NavLink = ({ to, label, active }: { to: string; label: string; active: boolean }) => (
    <Link to={to} className={`flex flex-col items-center gap-1 ${active ? "text-blue-600" : "text-gray-400"}`}>
        <div className="w-6 h-6 bg-current rounded-full opacity-20" />
        <span className="text-xs font-medium">{label}</span>
    </Link>
);
