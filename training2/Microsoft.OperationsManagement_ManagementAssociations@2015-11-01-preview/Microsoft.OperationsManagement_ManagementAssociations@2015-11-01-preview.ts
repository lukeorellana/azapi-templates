import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationsmanagementManagementassociationsProps extends IAzAPIBaseProps {
/**
   * The applicationId of the appliance for this association.
   */
readonly applicationId: string;
}

/**
 * OperationsmanagementManagementassociations resource
 */
export class OperationsmanagementManagementassociations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationsmanagementManagementassociationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationsManagement/ManagementAssociations@2015-11-01-preview";
  }

  protected getResourceBody(props: OperationsmanagementManagementassociationsProps): string {
    return JSON.stringify(
        {properties: {applicationId: "string"}}
    );
  }
}
