import React from 'react';
import { render, screen } from "@testing-library/react";
import Review from "../Components/Review";

test("renders review component", () => {
  const sampleReview = {
    "id": "5d707203b65083001e956f0a",
    "author": "Weeks Duran",
    "place": "Big Johns Burgers",
    "published_at": "Thu Jun 27 1974 11:46:39 GMT-0500 (Central Daylight Time)",
    "rating": 5,
    "content": "Ipsum mollit anim pariatur."
  };

  render(<Review review={sampleReview} />);
  screen.getByText("Weeks Duran")
  screen.getByText("Big Johns Burgers")
  screen.getByText("Ipsum mollit anim pariatur.")
  screen.getByText("06/27/1974")
})