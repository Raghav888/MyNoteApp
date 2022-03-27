import "./searchbar.css";
export const Searchbar = () => {
  return (
    <div className="search-page">
      <div className="search-pagebar">
        <i className="fa fa-search search-icon" aria-hidden="true"></i>
        <input className="search-box" type="text" placeholder="Search" />
        <i className="fa fa-filter search-icon" aria-hidden="true"></i>
      </div>
    </div>
  );
};
