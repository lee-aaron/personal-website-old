import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";
import "./root-config.scss";

registerApplication({
  name: "@lee-aaron/navbar",
  app: () => System.import("@lee-aaron/navbar"),
  activeWhen: [isActive.nav]
});

registerApplication({
  name: "@lee-aaron/home",
  app: () => System.import("@lee-aaron/home"),
  activeWhen: [isActive.home]
});

registerApplication({
  name: "@lee-aaron/projects",
  app: () => System.import("@lee-aaron/projects"),
  activeWhen: [isActive.projects]
})

start({
  urlRerouteOnly: true,
});
