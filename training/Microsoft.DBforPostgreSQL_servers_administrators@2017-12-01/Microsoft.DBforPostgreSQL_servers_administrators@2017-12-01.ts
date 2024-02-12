import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface DbforpostgresqlServersAdministratorsProps extends IAzAPIBaseProps {

}

export class DbforpostgresqlServersAdministrators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DbforpostgresqlServersAdministratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DBforPostgreSQL/servers/administrators@2017-12-01";
  }

  protected getResourceBody(props: DbforpostgresqlServersAdministratorsProps): string {
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
// | sid | The server administrator Sid (Secure ID). | string (required) |
// | tenantId | The server Active Directory Administrator tenant id. | string (required) |
