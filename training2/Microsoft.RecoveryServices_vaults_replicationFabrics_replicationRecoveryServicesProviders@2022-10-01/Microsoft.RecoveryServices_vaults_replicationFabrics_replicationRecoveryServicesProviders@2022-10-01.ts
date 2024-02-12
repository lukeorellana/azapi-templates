import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsReplicationrecoveryservicesprovidersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:replicationFabrics;

/**
   * The identity provider input for DRA authentication.
   */
readonly authenticationIdentityInput: IdentityProviderInput;

/**
   * The Bios Id of the machine.
   */
readonly biosId?: string;

/**
   * The identity provider input for data plane authentication.
   */
readonly dataPlaneAuthenticationIdentityInput?: IdentityProviderInput;

/**
   * The Id of the machine where the provider is getting added.
   */
readonly machineId?: string;

/**
   * The name of the machine where the provider is getting added.
   */
readonly machineName: string;

/**
   * The identity provider input for resource access.
   */
readonly resourceAccessIdentityInput: IdentityProviderInput;

/**
   * The base authority for Azure Active Directory authentication.
   */
readonly aadAuthority: string;

/**
   * The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
   */
readonly applicationId: string;

/**
   * The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
   */
readonly audience: string;

/**
   * The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services.
   */
readonly objectId: string;

/**
   * The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services.
   */
readonly tenantId: string;
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
