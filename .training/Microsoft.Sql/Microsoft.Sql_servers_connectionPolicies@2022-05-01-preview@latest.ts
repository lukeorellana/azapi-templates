import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersConnectionpoliciesProps extends IAzAPIBaseProps {

}

/**
 * SqlServersConnectionpolicies resource
 */
export class SqlServersConnectionpolicies extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersConnectionpoliciesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/connectionPolicies@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersConnectionpoliciesProps): string {
    return JSON.stringify(
        {properties: {connectionType: "string"}}
    );
  }
}
