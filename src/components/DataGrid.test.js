import React from "react";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import DataGrid from "./DataGrid";

jest.mock("axios");

describe("DataGrid Component", () => {
  it("renders without errors", () => {
    render(<DataGrid />);
  });

  it("displays rocket cards", async () => {
    const mockRockets = [
      // Define your mock rockets here
    ];

    axios.get.mockResolvedValueOnce({ data: mockRockets });

    await act(async () => {
      render(<DataGrid />);
    });

    // Verify that the RocketCards are displayed
    // You might need to adapt this based on your RocketCard component
    const rocketCards = screen.queryAllByTestId("rocket-card");
    expect(rocketCards.length).toBe(mockRockets.length);
  });

  it("displays pagination buttons", async () => {
    const mockRockets = [
      // Define your mock rockets here
    ];

    const mockRocketCount = 10; // Total number of rockets for testing
    axios.get
      .mockResolvedValueOnce({ data: mockRockets })
      .mockResolvedValueOnce({ data: { rocketCount: mockRocketCount } });

    await act(async () => {
      render(<DataGrid />);
    });

    // Verify that the pagination buttons are displayed
    const paginationButtons = screen.queryAllByRole("button");
    expect(paginationButtons.length).toBeGreaterThan(0); // Adjust as needed
  });

  // Add more test cases as needed for other functionality
});
