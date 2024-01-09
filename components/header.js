import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const isActive = (href) => router.asPath === href;

    return (
        <div className="headerContainer">
            <header>
                <a href="/">
                    <div className="circle"></div>
                    <div className="name">SARIKA T.<br></br>DOPPALAPUDI</div>
                </a>
            </header>

            <nav>
                <ul>
                    <li className={isActive('/') ? 'active' : ''}><Link href="/">Home</Link></li>
                    <li className={isActive('/my-work') ? 'active' : ''}><Link href="/my-work">My Work</Link></li>
                    <li className={isActive('/about') ? 'active' : ''}><Link href="/about">About</Link></li>
                    <li className={isActive('/contact') ? 'active' : ''}><Link href="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    )
  }