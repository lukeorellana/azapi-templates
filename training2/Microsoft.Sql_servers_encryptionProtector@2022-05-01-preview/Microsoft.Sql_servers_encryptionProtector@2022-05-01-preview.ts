import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersEncryptionprotectorProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:servers;

/**
   * Key auto rotation opt-in flag. Either true or false.
   */
readonly autoRotationEnabled?: bool;

/**
   * The name of the server key.
   */
readonly serverKeyName?: string;

/**
   * The encryption protector type like 'ServiceManaged', 'AzureKeyVault'.
   */
readonly serverKeyType: 'AzureKeyVault''ServiceManaged';
}

/**
 * SqlServersEncryptionprotector resource
 */
export class SqlServersEncryptionprotector extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlServersEncryptionprotectorProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/servers/encryptionProtector@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlServersEncryptionprotectorProps): string {
    return JSON.stringify(
        {properties: {autoRotationEnabled: "${bool}", serverKeyName: "string", serverKeyType: "string"}}
    );
  }
}
