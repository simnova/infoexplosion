import { Container } from "./container"
import { HashLink as Link } from 'react-router-hash-link';


export const SubpageHeader: React.FC<any> = (_props) => {
    return (
        <header className="bg-zinc-800 text-white py-4 px-4 flex-none sticky top-0">
            <Container>
                <Link to="/#" className="text-white hover:text-zinc-300">Home</Link>
                <span className="mx-2">|</span>
                <Link to="/privacy-policy#" className="text-white hover:text-zinc-300">Privacy Policy</Link>
                <span className="mx-2">|</span>
                <Link to="/terms-of-use#" className="text-white hover:text-zinc-300">Terms of Use</Link>
            </Container>
        </header>
    )
}