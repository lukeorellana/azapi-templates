import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesEncryptionprotectorProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesEncryptionprotector resource
 */
export class SqlManagedinstancesEncryptionprotector extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesEncryptionprotectorProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/encryptionProtector@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesEncryptionprotectorProps): string {
    return JSON.stringify(
        {properties: {autoRotationEnabled: "${bool}", serverKeyName: "string", serverKeyType: "string"}}
    );
  }
}
