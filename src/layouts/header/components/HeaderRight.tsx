import { useState } from "react";
import MobileSidebar from "../../sidebar/MobileSidebar";
// import LoggedInAdminDetails from "../LoggedInAdminDetails";
import React from "react";

import Profile from "./Profile";
function HeaderRight() {
    const [isopen, setisopen] = useState<boolean>(false);
    return (
        <>
            <div className="lg:flex hidden">
                <Profile></Profile>
            </div>
            <div className="lg:hidden flex">
                <button onClick={() => {
                    setisopen(!isopen);
                    const body = document.body;
                    body.style.overflow = isopen ? 'auto' : 'hidden';
                }}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                <MobileSidebar open={isopen} setopen={setisopen}></MobileSidebar>
            </div>
        </>
    );
}

export default React.memo(HeaderRight);