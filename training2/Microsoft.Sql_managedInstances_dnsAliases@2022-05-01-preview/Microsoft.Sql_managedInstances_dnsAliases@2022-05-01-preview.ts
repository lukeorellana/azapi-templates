import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesDnsaliasesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedInstances;

/**
   * Whether or not DNS record should be created for this alias.
   */
readonly createDnsRecord?: bool;
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
