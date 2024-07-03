import "./search_box.styles.css";

const SearchBox = ({className,onChangeHandler}) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder="search monsters"
    onChange={onChangeHandler}
  />
);

export default SearchBox;
