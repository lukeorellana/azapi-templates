import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface RecoveryservicesVaultsReplicationfabricsProps extends IAzAPIBaseProps {

}

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

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:vaults |
// | properties | Fabric creation input. | FabricCreationInputPropertiesOrFabricProperties |

// | Name | Description | Value |
// |-|-|-|
// | customDetails | Fabric provider specific creation input. | FabricSpecificCreationInputOrFabricSpecificDetails |

// | Name | Description | Value |
// |-|-|-|
// | instanceType | Set the object type | AzureHyperVSiteInMageRcmVMMVMwareVMwareV2(required) |

// | Name | Description | Value |
// |-|-|-|
// | instanceType | Gets the class type. | 'Azure' (required) |
// | location | The Location. | string |

// | Name | Description | Value |
// |-|-|-|
// | instanceType | Gets the class type. | 'HyperVSite' (required) |

// | Name | Description | Value |
// |-|-|-|
// | instanceType | Gets the class type. | 'InMageRcm' (required) |
// | physicalSiteId | The ARM Id of the physical site. | string (required) |
// | sourceAgentIdentity | The identity provider input for source agent authentication. | IdentityProviderInput(required) |
// | vmwareSiteId | The ARM Id of the VMware site. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | aadAuthority | The base authority for Azure Active Directory authentication. | string (required) |
// | applicationId | The application/client Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
// | audience | The intended Audience of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
// | objectId | The object Id of the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |
// | tenantId | The tenant Id for the service principal with which the on-premise management/data plane components would communicate with our Azure services. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | instanceType | Gets the class type. | 'VMM' (required) |

// | Name | Description | Value |
// |-|-|-|
// | instanceType | Gets the class type. | 'VMware' (required) |

// | Name | Description | Value |
// |-|-|-|
// | instanceType | Gets the class type. | 'VMwareV2' (required) |
// | migrationSolutionId | The ARM Id of the migration solution. | string (required) |
// | physicalSiteId | The ARM Id of the physical site. | string |
// | vmwareSiteId | The ARM Id of the VMware site. | string |
