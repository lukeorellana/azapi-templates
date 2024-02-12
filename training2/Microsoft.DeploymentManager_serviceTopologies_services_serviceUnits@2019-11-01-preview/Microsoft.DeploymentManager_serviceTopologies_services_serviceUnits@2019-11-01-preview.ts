import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeploymentmanagerServicetopologiesServicesServiceunitsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:services;

/**
   * The artifacts for the service unit.
   */
readonly artifacts?: ServiceUnitArtifacts;

/**
   * Describes the type of ARM deployment to be performed on the resource.
   */
readonly deploymentMode: 'Complete''Incremental';

/**
   * The Azure Resource Group to which the resources in the service unit belong to or should be deployed to.
   */
readonly targetResourceGroup: string;

/**
   * The path to the ARM parameters file relative to the artifact source.
   */
readonly parametersArtifactSourceRelativePath?: string;

/**
   * The full URI of the ARM parameters file with the SAS token.
   */
readonly parametersUri?: string;

/**
   * The path to the ARM template file relative to the artifact source.
   */
readonly templateArtifactSourceRelativePath?: string;

/**
   * The full URI of the ARM template file with the SAS token.
   */
readonly templateUri?: string;
}

/**
 * DeploymentmanagerServicetopologiesServicesServiceunits resource
 */
export class DeploymentmanagerServicetopologiesServicesServiceunits extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DeploymentmanagerServicetopologiesServicesServiceunitsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DeploymentManager/serviceTopologies/services/serviceUnits@2019-11-01-preview";
  }

  protected getResourceBody(props: DeploymentmanagerServicetopologiesServicesServiceunitsProps): string {
    return JSON.stringify(
        {properties: {artifacts: {parametersArtifactSourceRelativePath: "string", parametersUri: "string", templateArtifactSourceRelativePath: "string", templateUri: "string"}, deploymentMode: "string", targetResourceGroup: "string"}}
    );
  }
}
