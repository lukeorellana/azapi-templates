import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationrecoveryservicesprovidersProps extends IAzAPIBaseProps {

}

/**
 * RecoveryservicesVaultsReplicationfabricsReplicationrecoveryservicesproviders resource
 */
export class RecoveryservicesVaultsReplicationfabricsReplicationrecoveryservicesproviders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsReplicationrecoveryservicesprovidersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationRecoveryServicesProviders@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsReplicationrecoveryservicesprovidersProps): string {
    return JSON.stringify(
        {properties: {authenticationIdentityInput: {aadAuthority: "string", applicationId: "string", audience: "string", objectId: "string", tenantId: "string"}, biosId: "string", dataPlaneAuthenticationIdentityInput: {aadAuthority: "string", applicationId: "string", audience: "string", objectId: "string", tenantId: "string"}, machineId: "string", machineName: "string", resourceAccessIdentityInput: {aadAuthority: "string", applicationId: "string", audience: "string", objectId: "string", tenantId: "string"}}}
    );
  }
}
