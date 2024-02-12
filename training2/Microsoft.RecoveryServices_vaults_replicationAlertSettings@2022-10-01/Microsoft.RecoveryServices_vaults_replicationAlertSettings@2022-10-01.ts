import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationalertsettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * The custom email address for sending emails.
   */
readonly customEmailAddresses?: string[];

/**
   * The locale for the email notification.
   */
readonly locale?: string;

/**
   * A value indicating whether to send email to subscription administrator.
   */
readonly sendToOwners?: string;
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
