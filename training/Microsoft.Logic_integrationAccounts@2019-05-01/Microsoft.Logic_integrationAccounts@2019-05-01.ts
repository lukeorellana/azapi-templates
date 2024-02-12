import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface LogicIntegrationaccountsProps extends IAzAPIBaseProps {

}

export class LogicIntegrationaccounts extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsProps): string {
    return JSON.stringify(
      {properties: {integrationServiceEnvironment: {id: "string"}, state: "string"}, sku: {name: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
// | location | The resource location. | string |
// | tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | sku | The sku. | IntegrationAccountSku |
// | properties | The integration account properties. | IntegrationAccountProperties |

// | Name | Description | Value |
// |-|-|-|
// | integrationServiceEnvironment | The integration service environment. | ResourceReference |
// | state | The workflow state. | 'Completed''Deleted''Disabled''Enabled''NotSpecified''Suspended' |

// | Name | Description | Value |
// |-|-|-|
// | id | The resource id. | string |

// | Name | Description | Value |
// |-|-|-|
// | name | The sku name. | 'Basic''Free''NotSpecified''Standard' (required) |
