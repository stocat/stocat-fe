
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {
    // Basic auth check: just check for token existence
    const token = localStorage.getItem("accessToken");

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
};
