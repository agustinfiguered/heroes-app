import { Outlet } from "react-router"




export const AdminLayout = () => {
    return (
        <div className="bg-cyan-300 h-100">
            <h1>Este es el AdminLayout!</h1>
            <Outlet />
        </div>
    )
}
