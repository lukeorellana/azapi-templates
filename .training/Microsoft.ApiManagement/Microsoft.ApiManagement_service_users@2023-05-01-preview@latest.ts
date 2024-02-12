import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceUsersProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceUsers resource
 */
export class ApimanagementServiceUsers extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceUsersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/users@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceUsersProps): string {
    return JSON.stringify(
        {properties: {appType: "string", confirmation: "string", email: "string", firstName: "string", identities: [{id: "string", provider: "string"}], lastName: "string", note: "string", password: "string", state: "string"}}
    );
  }
}
