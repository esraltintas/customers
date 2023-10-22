import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./index";

test("renders a button with the provided label", () => {
  const text = "Click me";
  const { getByText } = render(<Button text={text} />);
  const button = getByText(text);
  expect(button).toBeInTheDocument();
});

test("onClick function when the button is clicked", () => {
  const onClickMock = jest.fn();
  const { getByText } = render(
    <Button text="Click me" onClick={onClickMock} />
  );
  const button = getByText("Click me");
  fireEvent.click(button);
  expect(onClickMock).toHaveBeenCalled();
});
