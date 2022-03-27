import "./searchbar.css";
export const Searchbar = (props) => {
  return (
    <div className="search-page">
      <div className="search-pagebar">
        <i className="fa fa-search search-icon" aria-hidden="true"></i>
        <input className="search-box" type="text" placeholder="Search" />
        <i
          className={`fa fa-filter filter-icon icon-${props.home}`}
          aria-hidden="true"
        ></i>
      </div>
    </div>
  );
};
