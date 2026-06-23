export function formatGhOutput(
	output: Buffer<ArrayBuffer>,
): Record<string, unknown>[] & Record<string, unknown> {
	return JSON.parse(output.toString("utf-8"));
}
