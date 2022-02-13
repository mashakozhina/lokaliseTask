
const buildUser = () => {
  return {
    email: `test_${Date.now()}@gmail.com`,
    password: "123456",
  };
};

export default {
  buildUser
};
