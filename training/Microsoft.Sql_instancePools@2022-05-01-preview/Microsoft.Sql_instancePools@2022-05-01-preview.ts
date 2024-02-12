import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface SqlInstancepoolsProps extends IAzAPIBaseProps {

}

export class SqlInstancepools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlInstancepoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/instancePools@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlInstancepoolsProps): string {
    return JSON.stringify(
      {properties: {licenseType: "string", subnetId: "string", vCores: int}, sku: {capacity: int, family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | Resource location. | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | sku | The name and tier of the SKU. | Sku |
// | properties | Resource properties. | InstancePoolProperties |

// | Name | Description | Value |
// |-|-|-|
// | licenseType | The license type. Possible values are 'LicenseIncluded' (price for SQL license is included) and 'BasePrice' (without SQL license price). | 'BasePrice''LicenseIncluded' (required) |
// | subnetId | Resource ID of the subnet to place this instance pool in. | string (required) |
// | vCores | Count of vCores belonging to this instance pool. | int (required) |

// | Name | Description | Value |
// |-|-|-|
// | capacity | Capacity of the particular SKU. | int |
// | family | If the service has different generations of hardware, for the same SKU, then that can be captured here. | string |
// | name | The name of the SKU, typically, a letter + Number code, e.g. P3. | string (required) |
// | size | Size of the particular SKU | string |
// | tier | The tier or edition of the particular SKU, e.g. Basic, Premium. | string |
