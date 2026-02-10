import { FaSearch } from "react-icons/fa";
import styles from "./styles/search.module.css";
function Search({ searchInput, setSearchInput }) {
  return (
    <div className={styles.searchContainer}>
      <FaSearch className={styles.icon} color="white" size={40} />
      <input
        type="text"
        placeholder="جست و جو ..."
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}

export default Search;
