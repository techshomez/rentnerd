import "./search.css";
import { FiChevronDown, FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="search">
      <div className="search__wrapper">
        <div className="search__items">
          <h2>
            City Search
            <i>
              <FiChevronDown />
            </i>
          </h2>
          <input type="text" placeholder="City" value="123 Street" />
        </div>
        <div className="search__items">
          <h2>
            Type of rent
            <i>
              <FiChevronDown />
            </i>
          </h2>
          <input type="text" placeholder="City" value="Vila" />
        </div>
        <div className="search__items">
          <h2>
            Price
            <i>
              <FiChevronDown />
            </i>
          </h2>
          <input type="text" placeholder="City" value="$950,000.00" />
        </div>
        <div className="search__btn">
          <button>
            <i>
              <FiSearch />
            </i>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
