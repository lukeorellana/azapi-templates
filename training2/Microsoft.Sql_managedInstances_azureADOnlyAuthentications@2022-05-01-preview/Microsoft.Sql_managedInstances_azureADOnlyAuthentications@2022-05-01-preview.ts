import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesAzureadonlyauthenticationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedInstances;

/**
   * Azure Active Directory only Authentication enabled.
   */
readonly azureADOnlyAuthentication: bool;
}

/**
 * SqlManagedinstancesAzureadonlyauthentications resource
 */
export class SqlManagedinstancesAzureadonlyauthentications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesAzureadonlyauthenticationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/azureADOnlyAuthentications@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesAzureadonlyauthenticationsProps): string {
    return JSON.stringify(
        {properties: {azureADOnlyAuthentication: "${bool}"}}
    );
  }
}
