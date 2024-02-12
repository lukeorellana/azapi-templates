import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersAzureadonlyauthenticationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * Azure Active Directory only Authentication enabled.
   */
readonly azureADOnlyAuthentication: bool;
}

/**
 * SqlServersAzureadonlyauthentications resource
 */
export class SqlServersAzureadonlyauthentications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersAzureadonlyauthenticationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/azureADOnlyAuthentications@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersAzureadonlyauthenticationsProps): string {
    return JSON.stringify(
        {properties: {azureADOnlyAuthentication: "${bool}"}}
    );
  }
}
