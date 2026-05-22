/** @type {import('jest').Config} */
module.exports = {
  setupFiles: ["<rootDir>/jest.setup.js"],
  preset: "ts-jest",
  testEnvironment: "node",
  clearMocks: true,
};

// throw new Error("JEST CONFIG LOADED");
