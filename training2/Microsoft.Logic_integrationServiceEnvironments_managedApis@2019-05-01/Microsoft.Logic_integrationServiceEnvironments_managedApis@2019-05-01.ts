import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface LogicIntegrationserviceenvironmentsManagedapisProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:numberegrationServiceEnvironments;

/**
   * The integration service environment managed api deployment parameters.
   */
readonly deploymentParameters?: IntegrationServiceEnvironmentManagedApiDeploymentPar...;

/**
   * The integration service environment reference.
   */
readonly integrationServiceEnvironment?: ResourceReference;

/**
   * The integration service environment managed api content link for deployment.
   */
readonly contentLinkDefinition?: ContentLink;

/**
   * The content link URI.
   */
readonly uri?: string;

/**
   * The resource id.
   */
readonly id?: string;
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
