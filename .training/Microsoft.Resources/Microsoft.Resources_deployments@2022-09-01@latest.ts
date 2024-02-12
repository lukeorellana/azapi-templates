import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ResourcesDeploymentsProps extends IAzAPIBaseProps {

}

/**
 * ResourcesDeployments resource
 */
export class ResourcesDeployments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ResourcesDeploymentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Resources/deployments@2022-09-01";
  }

  protected getResourceBody(props: ResourcesDeploymentsProps): string {
    return JSON.stringify(
        {properties: {debugSetting: {detailLevel: "string"}, expressionEvaluationOptions: {scope: "string"}, mode: "string", onErrorDeployment: {deploymentName: "string", type: "string"}, parametersLink: {contentVersion: "string", uri: "string"}, templateLink: {contentVersion: "string", id: "string", queryString: "string", relativePath: "string", uri: "string"}}, resourceGroup: "string", subscriptionId: "string", scope: "string"}
    );
  }
}
