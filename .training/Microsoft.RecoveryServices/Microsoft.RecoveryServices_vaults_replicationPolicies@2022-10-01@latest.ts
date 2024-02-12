import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationpoliciesProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsReplicationpolicies resource
 */
export class RecoveryservicesVaultsReplicationpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationPolicies@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationpoliciesProps): string {
    return JSON.stringify(
        {properties: {providerSpecificInput: {instanceType: "string"}}}
    );
  }
}
