import { useContext, useEffect, useState } from "react";
import { FocusContext } from "../../Contexts/FocusProvider";
import productsData from "../../../data/productsData";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const { isFocused } = useContext(FocusContext);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  function searchHandler() {
    if (search.match(/\w/gi) !== null) {
      setSearchList(
        productsData.filter((n) =>
          n.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setSearchList([]);
    }
  }
  useEffect(() => searchHandler(), [search]);
  return (
    <div
      className={`search-bar  ${
        isFocused === "search" ? "visible" : "invisible"
      }`}
    >
      <input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onClick={(e) => e.stopPropagation()}
        placeholder="Search for product ..."
        className={` form-input ${isFocused === "search" ? "show-search" : ""}`}
      />
      {searchList.length !== 0 && (
        <div
          className={` search-list ${
            isFocused === "search" ? "" : "hide-search-list"
          }`}
        >
          <ul>
            {searchList.map((item) => (
              <li key={item.id}>
                <Link
                  to={`/product-details/${item.id}`}
                  className=" text-large "
                  onClick={() => {
                    setSearchList([]);
                    setSearch("");
                  }}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
