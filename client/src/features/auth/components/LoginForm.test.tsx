import { render, screen } from "@testing-library/react";
import { test, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import LoginForm from "./LoginForm";

// ✅ mock the hook BEFORE tests run
vi.mock("./useLogin", () => ({
  useLogin: () => ({
    mutate: vi.fn(),
    isPending: false,
    error: null,
  }),
}));

test("renders login form", () => {
  render(<LoginForm />);

  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
});
