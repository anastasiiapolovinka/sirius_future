import React from "react";
import Login from "./login";
import CalendarLayout from "./calendar";
import UserLayout from "./editor";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";

const router = createHashRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/calendar",
    element: <CalendarLayout />,
  },
  {
    path: "/editor",
    element: <UserLayout />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </Provider>
  );
}

export default App;
