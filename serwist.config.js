// @ts-check
import { serwist } from "@serwist/next/config";

export default serwist({
  swSrc: "sw.ts",
  swDest: "public/sw.js",
});
