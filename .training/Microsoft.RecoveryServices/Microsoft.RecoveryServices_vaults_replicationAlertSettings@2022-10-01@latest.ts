import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationalertsettingsProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsReplicationalertsettings resource
 */
export class RecoveryservicesVaultsReplicationalertsettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationalertsettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationAlertSettings@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationalertsettingsProps): string {
    return JSON.stringify(
        {properties: {customEmailAddresses: ["string"], locale: "string", sendToOwners: "string"}}
    );
  }
}
