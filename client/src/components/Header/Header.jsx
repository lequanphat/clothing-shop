import AboveHeader from './AboveHeader';
import BelowHeader from './BelowHeader';
function Header() {
    return (
        <header className="fixed top-[0] left-[0] w-[100%] z-10 ">
            <AboveHeader />
            <BelowHeader />
        </header>
    );
}

export default Header;
