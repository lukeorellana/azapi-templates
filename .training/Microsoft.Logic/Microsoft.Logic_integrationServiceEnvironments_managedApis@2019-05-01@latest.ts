import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationserviceenvironmentsManagedapisProps extends IAzAPIBaseProps {

}

/**
 * LogicIntegrationserviceenvironmentsManagedapis resource
 */
export class LogicIntegrationserviceenvironmentsManagedapis extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationserviceenvironmentsManagedapisProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationServiceEnvironments/managedApis@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationserviceenvironmentsManagedapisProps): string {
    return JSON.stringify(
        {properties: {deploymentParameters: {contentLinkDefinition: {uri: "string"}}, integrationServiceEnvironment: {id: "string"}}}
    );
  }
}
