import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersProps extends IAzAPIBaseProps {

}

export class RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RecoveryServices/vaults/replicationFabrics/replicationProtectionContainers@2022-10-01";
  }

  protected getResourceBody(props: RecoveryservicesVaultsReplicationfabricsReplicationprotectioncontainersProps): string {
    return JSON.stringify(
      {properties: {providerSpecificInput: [{instanceType: "string"}]}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:replicationFabrics |
// | properties | Create protection container input properties. | CreateProtectionContainerInputPropertiesOrProtection... |

// | Name | Description | Value |
// |-|-|-|
// | providerSpecificInput | Provider specific inputs for container creation. | ReplicationProviderSpecificContainerCreationInput[] |

// | Name | Description | Value |
// |-|-|-|
// | instanceType | Set the object type | A2AA2ACrossClusterMigrationVMwareCbt(required) |

// | Name | Description | Value |
// |-|-|-|
// | instanceType | The class type. | 'A2A' (required) |

// | Name | Description | Value |
// |-|-|-|
// | instanceType | The class type. | 'A2ACrossClusterMigration' (required) |

// | Name | Description | Value |
// |-|-|-|
// | instanceType | The class type. | 'VMwareCbt' (required) |
