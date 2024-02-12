import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface LogicIntegrationaccountsSessionsProps extends IAzAPIBaseProps {

}

export class LogicIntegrationaccountsSessions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: LogicIntegrationaccountsSessionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Logic/integrationAccounts/sessions@2019-05-01";
  }

  protected getResourceBody(props: LogicIntegrationaccountsSessionsProps): string {
    return JSON.stringify(
      {properties: {}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required)Character limit: 1-80Valid characters:Alphanumerics, hyphens, underscores, periods, and parenthesis. |
// | location | The resource location. | string |
// | tags | The resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:integrationAccounts |
// | properties | The integration account session properties. | IntegrationAccountSessionProperties(required) |

// | Name | Description | Value |
// |-|-|-|
// | content | The session content. | For Bicep, you can use theany()function. |
