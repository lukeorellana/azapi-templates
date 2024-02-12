import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CognitiveservicesAccountsDeploymentsProps extends IAzAPIBaseProps {

}

/**
 * CognitiveservicesAccountsDeployments resource
 */
export class CognitiveservicesAccountsDeployments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CognitiveservicesAccountsDeploymentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CognitiveServices/accounts/deployments@2023-05-01";
  }

  protected getResourceBody(props: CognitiveservicesAccountsDeploymentsProps): string {
    return JSON.stringify(
        {properties: {model: {format: "string", name: "string", source: "string", version: "string"}, raiPolicyName: "string", scaleSettings: {capacity: "${int}", scaleType: "string"}, versionUpgradeOption: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
