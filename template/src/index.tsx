import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { Provider as ReduxProvider } from "react-redux";
import App from "./App";
import "./i18n";
import store from "config/store";
import client from "config/query";
import { initAxiosInterceptors } from "config/axios";
import SuspenseFallback from "components/SuspenseFallback";
import reportWebVitals from "./reportWebVitals";

initAxiosInterceptors();

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
        <QueryClientProvider client={client}>
          <React.Suspense fallback={<SuspenseFallback />}>
            <App />
          </React.Suspense>
        </QueryClientProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
