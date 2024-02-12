import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationsmanagementManagementconfigurationsProps extends IAzAPIBaseProps {

}

/**
 * OperationsmanagementManagementconfigurations resource
 */
export class OperationsmanagementManagementconfigurations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationsmanagementManagementconfigurationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationsManagement/ManagementConfigurations@2015-11-01-preview";
  }

  protected getResourceBody(props: OperationsmanagementManagementconfigurationsProps): string {
    return JSON.stringify(
        {properties: {applicationId: "string", parameters: [{name: "string", value: "string"}], parentResourceType: "string"}}
    );
  }
}
