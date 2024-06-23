type HeaderProps = {
    account: string | undefined;
    onConnect: () => void;
    disConnect: () => void;
};

function truncateString(str: string) {
    if (str.length > 6) {
        return str.substring(0, 6) + "...";
    }
    return str;
}

export default function Header({ account, onConnect, disConnect } : HeaderProps) {

    return (
        <div className="navbar border-b border-gray-200">
            <div className="flex-1">
                <a href={"/"} className="btn btn-ghost text-xl">Union</a>
            </div>
            {!account && (
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className={"flex"}>
                            <div
                                className={"mt-3 btn btn-outline btn-info"}
                                onClick={onConnect}>
                                ウォレットを接続
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {account && (
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className={"flex"}>
                            <div className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            </div>
                            <div className={"mt-3"}>{truncateString(account)}</div>
                        </div>
                        <ul tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <a href={"/my-profile"} className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><div onClick={disConnect}>Logout</div></li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}
