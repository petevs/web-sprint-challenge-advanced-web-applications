import React from "react";
import { act, render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { colors } from '../utils/testData'
import { getColors as mockGetColors } from '../api/getColors'
import Bubbles from './Bubbles'

jest.mock('../api/getColors')

const colorList = colors

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockGetColors.mockResolvedValueOnce(colorList)
  const {rerender} = render(<BubblePage />)

  await waitFor( async () => {
    screen.debug();
  })

  const colorName = screen.getByText(/aliceblue/i)
  const bubblesHeading = screen.getByText(/bubbles/i)
  expect(colorName)
  expect(bubblesHeading)

});
