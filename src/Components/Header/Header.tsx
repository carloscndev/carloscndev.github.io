import './Header.css'

const Header = () => (
  <header className="brand-header">
    <h1 className="name">Carlos Castañeda Nava</h1>
    <a
      className="action-button"
      href="../../../public/files/CV-CarlosCastanedaNava.pdf"
      target="_blank" 
      rel="noopener noreferrer"
    >CV ↓</a>
  </header>
);

export default Header;