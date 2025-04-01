export default function Navbar({ setQuery, setDarkMode, darkMode }) {
  return (
    <nav>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setDarkMode(!darkMode)}>Toggle Dark Mode</button>
    </nav>
  );
}
