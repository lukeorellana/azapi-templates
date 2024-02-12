import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppconfigurationConfigurationstoresProps extends IAzAPIBaseProps {

}

/**
 * AppconfigurationConfigurationstores resource
 */
export class AppconfigurationConfigurationstores extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppconfigurationConfigurationstoresProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppConfiguration/configurationStores@2023-03-01";
  }

  protected getResourceBody(props: AppconfigurationConfigurationstoresProps): string {
    return JSON.stringify(
        {properties: {createMode: "string", disableLocalAuth: "${bool}", enablePurgeProtection: "${bool}", encryption: {keyVaultProperties: {identityClientId: "string", keyIdentifier: "string"}}, publicNetworkAccess: "string", softDeleteRetentionInDays: "${int}"}, sku: {name: "string"}}
    );
  }
}
