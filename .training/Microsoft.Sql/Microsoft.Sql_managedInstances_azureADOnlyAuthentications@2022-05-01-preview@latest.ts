import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesAzureadonlyauthenticationsProps extends IAzAPIBaseProps {

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
