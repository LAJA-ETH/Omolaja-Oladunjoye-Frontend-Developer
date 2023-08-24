// SearchBar.js
import React from "react";

const SearchBar = ({ onSearch, onFilterChange }) => {
  return (
    <>
      <div className="gap-4 mb-4 hidden md:flex text-sm ">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className="p-1 rounded border w-3/5 h-8"
        />
        <select
          onChange={(e) => onFilterChange("active", e.target.value)}
          className="h-8 p-1 rounded border">
          <option value="">Active Status</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <input
          type="number"
          min="0"
          max="100"
          placeholder="Success Rate %"
          onChange={(e) => onFilterChange("success_rate", e.target.value)}
          className="h-8 p-1 rounded border"
        />
        <select
          onChange={(e) => onFilterChange("boosters", e.target.value)}
          className="h-8 p-1 rounded border">
          <option value="">Boosters</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div className="flex-col gap-4 mb-4 text-xs md:hidden flex">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearch(e.target.value)}
          className="p-2 rounded border w-full"
        />
        <div className="flex justify-between">
          <select
            onChange={(e) => onFilterChange("active", e.target.value)}
            className="p-1 rounded border">
            <option value="">Active Status</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <input
            type="number"
            min="0"
            max="100"
            placeholder="Success Rate %"
            onChange={(e) => onFilterChange("success_rate", e.target.value)}
            className="p-1 rounded border"
          />
          <select
            onChange={(e) => onFilterChange("boosters", e.target.value)}
            className="p-1 rounded border">
            <option value="">Boosters</option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
