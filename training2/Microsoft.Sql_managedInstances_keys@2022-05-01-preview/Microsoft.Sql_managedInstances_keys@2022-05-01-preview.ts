import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesKeysProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedInstances;

/**
   * The key type like 'ServiceManaged', 'AzureKeyVault'.
   */
readonly serverKeyType: 'AzureKeyVault''ServiceManaged';

/**
   * The URI of the key. If the ServerKeyType is AzureKeyVault, then the URI is required.
   */
readonly uri?: string;
}

/**
 * SqlManagedinstancesKeys resource
 */
export class SqlManagedinstancesKeys extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesKeysProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/keys@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesKeysProps): string {
    return JSON.stringify(
        {properties: {serverKeyType: "string", uri: "string"}}
    );
  }
}
