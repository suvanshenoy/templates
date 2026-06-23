import { execSync } from "node:child_process";
import { apiUrl, ghApiCmd } from "@/constants";
import { formatGhOutput } from "@/utils";

export class Deployment {
	private totalDeployments = formatGhOutput(
		execSync(`${ghApiCmd} --method GET ${apiUrl}`),
	);
	private deploymentsPerPage = formatGhOutput(
		execSync(
			`${ghApiCmd} --method GET ${apiUrl}?per_page=${this.totalDeployments.length}`,
		),
	);

	private deploymentIds: number[] = [];

	getTotalDeployments() {
		return this.totalDeployments;
	}

	getTotalDeploymentsCount(): number {
		return this.totalDeployments.length;
	}

	getDeploymentsPerPage() {
		return this.deploymentsPerPage;
	}

	getDeploymentsPerPageCount(): number {
		return this.deploymentsPerPage.length;
	}

	getDeploymentIdsPerPage(): number[] {
		for (const deployment of this.deploymentsPerPage) {
			this.deploymentIds.push(deployment?.id);
		}
		return this.deploymentIds;
	}

	deleteDeployments() {
		for (const deploymentId of this.getDeploymentIdsPerPage()) {
			const statusOutput = formatGhOutput(
				execSync(
					`${ghApiCmd} --method POST ${apiUrl}/${deploymentId}/statuses -f "state=inactive"`,
				),
			);
			console.log(statusOutput);
			const deletedDeploymentOutput = formatGhOutput(
				execSync(`${ghApiCmd} --method DELETE ${apiUrl}/${deploymentId}`),
			);
			console.log(deletedDeploymentOutput);
		}
	}
}
