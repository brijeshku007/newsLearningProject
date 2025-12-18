import React, { useEffect, useRef } from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Navbar = ({ className }) => {
  const { fetchNews, setNews } = useNewsContext();
  const [searchTerm, setSearchTerm] = React.useState("");
  const debounceRef = useRef(null);

  useEffect(() => {
    if (!searchTerm) return;

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(async () => {
      const res = await fetchNews(
        `everything?q=${encodeURIComponent(searchTerm)}`
      );
      setNews(res?.articles || []);
    }, 500);

    return () => clearTimeout(debounceRef.current);
  }, [searchTerm]);
  return (
    <div className={`bg-base-300 ${className}`}>
      <Wrapper>
        <div className="navbar  shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">BK News</a>
          </div>
          <div className="flex gap-2">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />{" "}
                </svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
