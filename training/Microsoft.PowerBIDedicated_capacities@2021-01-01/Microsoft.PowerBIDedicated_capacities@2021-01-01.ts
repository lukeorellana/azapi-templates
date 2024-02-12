import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface PowerbidedicatedCapacitiesProps extends IAzAPIBaseProps {

}

export class PowerbidedicatedCapacities extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerbidedicatedCapacitiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerBIDedicated/capacities@2021-01-01";
  }

  protected getResourceBody(props: PowerbidedicatedCapacitiesProps): string {
    return JSON.stringify(
      {properties: {administration: {members: ["string"]}, mode: "string"}, systemData: {createdAt: "string", createdBy: "string", createdByType: "string", lastModifiedAt: "string", lastModifiedBy: "string", lastModifiedByType: "string"}, sku: {capacity: int, name: "string", tier: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | Location of the PowerBI Dedicated resource. | string (required) |
// | tags | Key-value pairs of additional resource provisioning properties. | Dictionary of tag names and values. SeeTags in templates |
// | sku | The SKU of the PowerBI Dedicated capacity resource. | CapacitySku(required) |
// | properties | Properties of the provision operation request. | DedicatedCapacityProperties |
// | systemData | Metadata pertaining to creation and last modification of the resource. | SystemData |

// | Name | Description | Value |
// |-|-|-|
// | administration | A collection of Dedicated capacity administrators | DedicatedCapacityAdministrators |
// | mode | Specifies the generation of the Power BI Embedded capacity. If no value is specified, the default value 'Gen2' is used.Learn More | 'Gen1''Gen2' |

// | Name | Description | Value |
// |-|-|-|
// | members | An array of administrator user identities. | string[] |

// | Name | Description | Value |
// |-|-|-|
// | capacity | The capacity of the SKU. | int |
// | name | Name of the SKU level. | string (required) |
// | tier | The name of the Azure pricing tier to which the SKU applies. | 'AutoPremiumHost''PBIE_Azure''Premium' |

// | Name | Description | Value |
// |-|-|-|
// | createdAt | The timestamp of resource creation (UTC) | string |
// | createdBy | An identifier for the identity that created the resource | string |
// | createdByType | The type of identity that created the resource | 'Application''Key''ManagedIdentity''User' |
// | lastModifiedAt | The timestamp of resource last modification (UTC) | string |
// | lastModifiedBy | An identifier for the identity that last modified the resource | string |
// | lastModifiedByType | The type of identity that last modified the resource | 'Application''Key''ManagedIdentity''User' |
