import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";
import ScrollToTop from "../common/ScrollToTop";

export default function Root() {
    return (
        <>
            <ScrollToTop />
            <NavBar />
            <div id="detail">
                <Outlet />
            </div>
        </>
    );
  }