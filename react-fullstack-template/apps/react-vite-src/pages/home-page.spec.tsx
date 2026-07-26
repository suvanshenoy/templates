import { HomePage } from "@apps/react-vite-src/pages";
import { describe, expect, it } from "vitest";
import { render } from "vitest-browser-react";

describe("HomePage component", () => {
	it("should render the content of para", async () => {
		const screen = await render(<HomePage />);
		const paragraph = screen.getByRole("paragraph");
		expect(paragraph).toHaveTextContent("This is home page");
	});
});
