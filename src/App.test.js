import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

it("displays test and hides idk", () => {
  const { queryByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  expect(queryByText("test")).toBeInTheDocument();
  expect(queryByText("idk")).not.toBeInTheDocument();
  const toggleBtn = screen.getByRole("button");
  fireEvent.click(toggleBtn);
  expect(queryByText("test")).not.toBeInTheDocument();
  expect(queryByText(/idk/i)).toBeInTheDocument();
});
