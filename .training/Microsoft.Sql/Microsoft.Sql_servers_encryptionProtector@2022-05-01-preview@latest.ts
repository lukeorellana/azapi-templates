import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlServersEncryptionprotectorProps extends IAzAPIBaseProps {

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
