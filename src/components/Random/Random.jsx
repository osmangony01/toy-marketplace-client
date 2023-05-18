import { handler } from "daisyui";
import { useState } from "react";


const Random = () => {
    const [userControl, setUserControl] = useState(true);



    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="flex-none">

                {/* <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><span>asl;dfkjasdl;fk</span></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div> */}

                <div className="relative" onClick={() => setUserControl(!userControl)}>
                    <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    {
                        userControl && <div className="absolute right-0 top-10"> 
                            <ul className="menu menu-compact mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><span>asl;dfkjasdl;fk</span></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Random;