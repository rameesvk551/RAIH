import { render, screen } from "@testing-library/react";
import Divider from "./Divider";

test("renders label in Divider", () => {
  render(<Divider label="OR" />);
  expect(screen.getByText("OR")).toBeInTheDocument();
});
