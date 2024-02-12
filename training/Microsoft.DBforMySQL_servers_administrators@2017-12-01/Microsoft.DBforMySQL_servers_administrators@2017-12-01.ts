import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DbformysqlServersAdministratorsProps extends IAzAPIBaseProps {

}

export class DbformysqlServersAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbformysqlServersAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforMySQL/servers/administrators@2017-12-01";
  }

  protected getResourceBody(props: DbformysqlServersAdministratorsProps): string {
    return JSON.stringify(
      {properties: {administratorType: "ActiveDirectory", login: "string", sid: "string", tenantId: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | 'activeDirectory' |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:servers |
// | properties | Properties of the server AAD administrator. | ServerAdministratorProperties |

// | Name | Description | Value |
// |-|-|-|
// | administratorType | The type of administrator. | 'ActiveDirectory' (required) |
// | login | The server administrator login account name. | string (required) |
// | sid | The server administrator Sid (Secure ID). | string (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
// | tenantId | The server Active Directory Administrator tenant id. | string (required)Constraints:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$ |
