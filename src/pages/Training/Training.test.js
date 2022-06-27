import { render, screen } from "@testing-library/react";
import Training from "./Training";

it("Find the text", () => {
  render(<Training />);
  const infoElement = screen.getByText(/BJIT Academy/i);
  expect(infoElement).toBeInTheDocument();
});

it("Is this text contain in this section?", () => {
  render(<Training />);
  const infoElement = screen.queryByText(/Training Section/i);
  expect(infoElement).not.toBeInTheDocument();
});

it("Is this text contain in this section or not?", () => {
  render(<Training />);
  const infoElement = screen.queryByText(/Job Section/i);
  expect(infoElement).not.toBeInTheDocument();
});
