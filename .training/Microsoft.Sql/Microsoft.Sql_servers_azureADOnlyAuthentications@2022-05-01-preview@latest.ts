import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersAzureadonlyauthenticationsProps extends IAzAPIBaseProps {

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
