import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DeploymentmanagerServicetopologiesServicesServiceunitsProps extends IAzAPIBaseProps {

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
