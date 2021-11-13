module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  automock: false,
  setupFiles: ["./src/setupJest.js"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.jest.json",
    },
  },
};
