import NavBar from "./components/NavBar.jsx";

const App = () => {
    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple logo" />

                <ul>
                    {[
                        { label: 'Store' },
                        { label: 'Mac' },
                        { label: 'Watch' },
                        { label: 'iPhone' },
                        { label: 'Vision' },
                        { label: 'AirPods' },
                    ].map((link) => (
                        <li key={link.label}>
                            <a href={link.label}>{link.label}</a>
                        </li>
                    ))}
                </ul>
                <div className={"flex-center gap-3"}>
                    <button>
                        <img src="/search.svg" alt="Search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
 }
 export default App
