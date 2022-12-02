import React from 'react';
import Header from "../Components/Header"
import { render, screen } from "@testing-library/react";

test("renders header component", () => {
  render(<Header />);
  screen.getByText("Reviews")
})