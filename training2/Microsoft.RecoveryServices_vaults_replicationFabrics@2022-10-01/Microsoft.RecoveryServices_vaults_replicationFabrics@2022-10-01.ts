import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RecoveryservicesVaultsReplicationfabricsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:vaults;

/**
   * Fabric provider specific creation input.
   */
readonly customDetails?: FabricSpecificCreationInputOrFabricSpecificDetails;

/**
   * Set the object type
   */
readonly instanceType: AzureHyperVSiteInMageRcmVMMVMwareVMwareV2;

/**
   * Gets the class type.
   */
readonly instanceType: 'Azure';

/**
   * Gets the class type.
   */
readonly instanceType: 'HyperVSite';

/**
   * Gets the class type.
   */
readonly instanceType: 'InMageRcm';

/**
   * The ARM Id of the physical site.
   */
readonly physicalSiteId: string;

/**
   * The identity provider input for source agent authentication.
   */
readonly sourceAgentIdentity: IdentityProviderInput;

/**
   * The ARM Id of the VMware site.
   */
readonly vmwareSiteId: string;

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

/**
   * Gets the class type.
   */
readonly instanceType: 'VMM';

/**
   * Gets the class type.
   */
readonly instanceType: 'VMware';

/**
   * Gets the class type.
   */
readonly instanceType: 'VMwareV2';

/**
   * The ARM Id of the migration solution.
   */
readonly migrationSolutionId: string;

/**
   * The ARM Id of the physical site.
   */
readonly physicalSiteId?: string;

/**
   * The ARM Id of the VMware site.
   */
readonly vmwareSiteId?: string;
}

/**
 * RecoveryservicesVaultsReplicationfabrics resource
 */
export class RecoveryservicesVaultsReplicationfabrics extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsProps): string {
    return JSON.stringify(
        {properties: {customDetails: {instanceType: "string"}}}
    );
  }
}
