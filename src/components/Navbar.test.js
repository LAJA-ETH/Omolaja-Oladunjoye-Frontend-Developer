import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar"; // Adjust the import to your file structure

describe("Navbar", () => {
  // Reset the body overflow style after each test
  afterEach(() => {
    document.body.style.overflow = "unset";
  });

  test("initial state", () => {
    render(<Navbar />);

    expect(screen.queryByText("x")).toBeNull();
    expect(screen.queryByText("Menu")).toBeInTheDocument();
  });

  test("clicking Menu button opens the menu", () => {
    render(<Navbar />);

    // Initially, Menu should be displayed
    const menuButton = screen.getByText("Menu");
    expect(menuButton).toBeInTheDocument();

    userEvent.click(menuButton);

    // After clicking, 'x' should be displayed and 'Menu' should disappear
    expect(screen.getByText("x")).toBeInTheDocument();
    expect(screen.queryByText("Menu")).toBeNull();

    // Verify overflow is hidden when menu is open
    expect(document.body.style.overflow).toBe("hidden");
  });

  test("menu contains all the correct items", () => {
    render(<Navbar />);

    // Open the menu first
    const menuButton = screen.getByText("Menu");
    userEvent.click(menuButton);

    // Verify all items exist
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About Us")).toBeInTheDocument();
    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Capsules")).toBeInTheDocument();
    expect(screen.getByText("Rockects")).toBeInTheDocument(); // Note: You have a typo here, should be "Rockets"
  });
});
