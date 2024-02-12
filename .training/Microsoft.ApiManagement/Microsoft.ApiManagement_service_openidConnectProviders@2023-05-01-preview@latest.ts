import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ApimanagementServiceOpenidconnectprovidersProps extends IAzAPIBaseProps {

}

/**
 * ApimanagementServiceOpenidconnectproviders resource
 */
export class ApimanagementServiceOpenidconnectproviders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ApimanagementServiceOpenidconnectprovidersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ApiManagement/service/openidConnectProviders@2023-05-01-preview";
  }

  protected getResourceBody(props: ApimanagementServiceOpenidconnectprovidersProps): string {
    return JSON.stringify(
        {properties: {clientId: "string", clientSecret: "string", description: "string", displayName: "string", metadataEndpoint: "string", useInApiDocumentation: "${bool}", useInTestConsole: "${bool}"}}
    );
  }
}
