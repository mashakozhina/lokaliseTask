import paths from "../fixtures/paths.js";
import dataTestIds from "../fixtures/dataTestIds.js";
import navigation from "./navigation.js";

const buildUser = () => {
  return {
    email: `test_${Date.now()}@gmail.com`,
    password: "123456",
  };
};

export default {
  buildUser
};
