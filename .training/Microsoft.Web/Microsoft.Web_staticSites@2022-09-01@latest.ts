import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesProps extends IAzAPIBaseProps {

}

/**
 * WebStaticsites resource
 */
export class WebStaticsites extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesProps): string {
    return JSON.stringify(
        {properties: {allowConfigFileUpdates: "${bool}", branch: "string", buildProperties: {apiBuildCommand: "string", apiLocation: "string", appArtifactLocation: "string", appBuildCommand: "string", appLocation: "string", githubActionSecretNameOverride: "string", outputLocation: "string", skipGithubActionWorkflowGeneration: "${bool}"}, enterpriseGradeCdnStatus: "string", provider: "string", publicNetworkAccess: "string", repositoryToken: "string", repositoryUrl: "string", stagingEnvironmentPolicy: "string", templateProperties: {description: "string", isPrivate: "${bool}", owner: "string", repositoryName: "string", templateRepositoryUrl: "string"}}, sku: {capabilities: [{name: "string", reason: "string", value: "string"}], capacity: "${int}", family: "string", locations: ["string"], name: "string", size: "string", skuCapacity: {default: "${int}", elasticMaximum: "${int}", maximum: "${int}", minimum: "${int}", scaleType: "string"}, tier: "string"}, kind: "string"}
    );
  }
}
