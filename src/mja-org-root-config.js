import { registerApplication, start } from "single-spa";
import * as isActive from "./activity-functions";

registerApplication(
  "@mja-org/single-spa-demo-nav",
  () => System.import("@mja-org/single-spa-demo-nav"),
  isActive.nav
);

registerApplication(
  "@mja-org/single-spa-demo-page-1",
  () => System.import("@mja-org/single-spa-demo-page-1"),
  isActive.page1
);

registerApplication(
  "@mja-org/single-spa-demo-page-2",
  () => System.import("@mja-org/single-spa-demo-page-2"),
  isActive.page2
);

start({
  urlRerouteOnly: true,
});
