import React from 'react';
import SingleView from "../Components/SingleView"
import { render, screen, fireEvent } from "@testing-library/react";

test("renders single review component", () => {
  const sampleReview = {
    "id": "5d707203f1c60da307b00335",
    "author": "Everett Bender",
    "place": "Soup du Jour",
    "published_at": "Wed Apr 09 2003 01:15:36 GMT-0500 (Central Daylight Time)",
    "rating": 2,
    "content": "Occaecat ea est nulla dolore labore do cupidatat dolor laborum deserunt qui. Labore duis nisi sint in aliqua enim pariatur est nisi aliqua ullamco consequat id magna. Magna aliqua culpa sunt fugiat laboris enim aute sit. Sit nostrud quis Lorem culpa eu cupidatat est aliqua. Laboris voluptate exercitation proident aliquip ad voluptate do consectetur irure et. Eiusmod enim nostrud reprehenderit nulla cupidatat elit duis.\r\n"
  };
  render(<SingleView review={sampleReview} />);
  const testBtn = screen.getByRole("button")
  const testPlace = screen.getByText("Soup du Jour")
  const testPublishedDate = screen.getByText("04/08/2003")
  expect(testPlace).toBeInTheDocument();
  expect(testPublishedDate).toBeInTheDocument();
  expect(testBtn).toBeInTheDocument();
  
  fireEvent.click(testBtn)
  const editResponseText = screen.getByText("Edit Response");
  expect(editResponseText).toBeInTheDocument();
})