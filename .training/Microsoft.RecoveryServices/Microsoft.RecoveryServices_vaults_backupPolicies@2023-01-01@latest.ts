import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsBackuppoliciesProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsBackuppolicies resource
 */
export class RecoveryservicesVaultsBackuppolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsBackuppoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/backupPolicies@2023-01-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsBackuppoliciesProps): string {
    return JSON.stringify(
        {properties: {protectedItemsCount: "${int}", resourceGuardOperationRequests: ["string"], backupManagementType: "string"}, eTag: "string"}
    );
  }
}
