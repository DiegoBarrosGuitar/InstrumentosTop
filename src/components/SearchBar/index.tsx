import "./styles.css";

export default function SearchBar() {
  return (
    <form className="inst-SearchBar">
      <input className="inst-form-control" type="text" placeholder="Digite sua busca" />
      <button className="inst-search-bar-submit" type="submit">Buscar</button>
    </form>
  );
}
