import React from "react";
import ReactDOM from "react-dom/client";
import Loader from "@components/common/Loader";
import { HashRouter } from "react-router-dom";
import "@styles/index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { PersistGate } from "redux-persist/integration/react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { persister, store } from "@redux/store";
import { router } from "@routes/routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <ThemeProvider>
          <RouterProvider router={router} fallbackElement={<Loader />} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
