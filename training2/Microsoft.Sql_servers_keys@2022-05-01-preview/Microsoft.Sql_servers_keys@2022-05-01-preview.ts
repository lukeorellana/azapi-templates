import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersKeysProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * The server key type like 'ServiceManaged', 'AzureKeyVault'.
   */
readonly serverKeyType: 'AzureKeyVault''ServiceManaged';

/**
   * The URI of the server key. If the ServerKeyType is AzureKeyVault, then the URI is required. The AKV URI is required to be in this format: 'https://YourVaultName.vault.azure.net/keys/YourKeyName/YourKeyVersion'
   */
readonly uri?: string;
}

/**
 * SqlServersKeys resource
 */
export class SqlServersKeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersKeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/keys@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersKeysProps): string {
    return JSON.stringify(
        {properties: {serverKeyType: "string", uri: "string"}}
    );
  }
}
