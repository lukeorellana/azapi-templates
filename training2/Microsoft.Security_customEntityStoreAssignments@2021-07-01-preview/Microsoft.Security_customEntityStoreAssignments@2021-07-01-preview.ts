import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityCustomentitystoreassignmentsProps extends IAzAPIBaseProps {
/**
   * The principal assigned with entity store. If not provided, will use caller principal. Format of principal is: [AAD type]=[PrincipalObjectId];[TenantId]
   */
readonly principal?: string;
}

/**
 * SecurityCustomentitystoreassignments resource
 */
export class SecurityCustomentitystoreassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityCustomentitystoreassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/customEntityStoreAssignments@2021-07-01-preview";
  }

  protected getResourceBody(props: SecurityCustomentitystoreassignmentsProps): string {
    return JSON.stringify(
        {properties: {principal: "string"}}
    );
  }
}
