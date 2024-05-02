import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="uk-container">
            <nav className="uk-navbar">
                <div className="uk-navbar-left">
                    <Link href="/" className="uk-navbar-item uk-logo">My Todos</Link>
                </div>
                <div className="uk-navbar-right">
                    <ul className="uk-navbar-nav">
                        <li>
                            <Link href="/create">
                                <Image
                                    width="20"
                                    height="20"
                                    src="/plus.svg"
                                    alt="Plus"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}