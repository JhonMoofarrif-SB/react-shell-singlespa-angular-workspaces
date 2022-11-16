import React from "react";
// import ReactDOM from "react-dom/client";
import ShellApp from "./ShellApp";
import { LifeCycles, registerApplication, start } from "single-spa";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
// import "zone.js/dist/zone";

import ReactDOM from "react-dom";

//---
import { Observable } from 'windowed-observable';

const observable = new Observable('konoha');
observable.subscribe((ninja) => {
  console.log("Observer Shell", ninja)
})
observable.publish('Uchiha Shisui');

//---


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ShellApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// const root = ReactDOM.createRoot(
//   document.getElementById("root") as HTMLElement
// );

// root.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <ShellApp />
//     </BrowserRouter>
//   </React.StrictMode>
// );

registerApplication({
  name: "@apps/cuotas",
  app: (): Promise<LifeCycles> => (window as any).System.import("@apps/cuotas"),
  activeWhen: ["/cuotas"],
});
// registerApplication({
//   name: "@jc/app2",
//   app: (): Promise<LifeCycles> => (window as any).System.import("@jc/app2"),
//   activeWhen: ["/app2"],
// });


start({ urlRerouteOnly: true });
