import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesKeysProps extends IAzAPIBaseProps {

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
