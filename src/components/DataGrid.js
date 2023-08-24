import React, { useState, useEffect } from "react";
import axios from "axios";
import RocketCard from "./RocketCard";
import Popup from "./Popup";
import SearchBar from "./SearchBar";

const DataGrid = () => {
  const [rockets, setRockets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRocket, setSelectedRocket] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    active: "",
    success_rate: "",
    boosters: "",
  });
  const itemsPerPage = 2;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const [totalPages, setTotalPages] = useState(0); // Define totalPages state

  const handleSearch = (term) => {
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page when a new search is made
  };

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
    setCurrentPage(1); // Reset to first page when filters change
  };

  axios
    .get(`http://localhost:8000/rocketCount`)
    .then((response) => {
      setTotalPages(response.data.rocketCount / itemsPerPage);
    })
    .catch((error) => console.error(error));

  useEffect(() => {
    // Adjust API call to include filters and search term
    axios
      .get(
        `http://localhost:8000/rockets?offset=${startIndex}&limit=${itemsPerPage}&search=${searchTerm}&active=${filters.active}&success_rate=${filters.success_rate}&boosters=${filters.boosters}`
      )
      .then((response) => {
        setRockets(response.data);
      })
      .catch((error) => console.error(error));
  }, [startIndex, itemsPerPage, searchTerm, filters]);

  const handleCardClick = (rocket) => {
    setSelectedRocket(rocket);
  };

  const handleClosePopup = () => {
    setSelectedRocket(null);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSelectedRocket(null);
  };

  return (
    <div className="p-8">
      <SearchBar onSearch={handleSearch} onFilterChange={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
        {rockets.map((rocket) => (
          <RocketCard
            key={rocket.id}
            rocket={rocket}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <div className="mt-4 flex justify-center">
        {Array.from({ length: totalPages }).map((_, index) => (
          <>
            <button
              key={index}
              className={`mx-1 px-2 py-1 rounded-full text-sm w-7 h-7 ${
                currentPage === index + 1
                  ? "bg-red-950 text-white"
                  : "text-white"
              }`}
              onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          </>
        ))}
      </div>
      {selectedRocket && (
        <Popup rocket={selectedRocket} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default DataGrid;
