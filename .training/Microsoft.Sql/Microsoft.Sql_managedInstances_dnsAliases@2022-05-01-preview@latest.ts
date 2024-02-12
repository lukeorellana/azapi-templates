import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDnsaliasesProps extends IAzAPIBaseProps {

}

/**
 * SqlManagedinstancesDnsaliases resource
 */
export class SqlManagedinstancesDnsaliases extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesDnsaliasesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/dnsAliases@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesDnsaliasesProps): string {
    return JSON.stringify(
        {createDnsRecord: "${bool}"}
    );
  }
}
