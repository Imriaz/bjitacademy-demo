import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

it("Find the text", () => {
  render(<Navbar />);
  const infoElement = screen.getByText(/BJIT Academy/i);
  expect(infoElement).toBeInTheDocument();
});

it("Is this text contain in this section?", () => {
  render(<Navbar />);
  const infoElement = screen.queryByText(/Training Section/i);
  expect(infoElement).not.toBeInTheDocument();
});

it("Is this text contain in this section or not?", () => {
  render(<Navbar />);
  const infoElement = screen.queryByText(/Job Section/i);
  expect(infoElement).not.toBeInTheDocument();
});
