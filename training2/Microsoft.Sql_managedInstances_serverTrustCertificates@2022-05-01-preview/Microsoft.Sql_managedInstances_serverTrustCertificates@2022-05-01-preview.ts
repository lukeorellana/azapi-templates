import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SqlManagedinstancesServertrustcertificatesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:managedInstances;

/**
   * The certificate public blob
   */
readonly publicBlob?: string;
}

/**
 * SqlManagedinstancesServertrustcertificates resource
 */
export class SqlManagedinstancesServertrustcertificates extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SqlManagedinstancesServertrustcertificatesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Sql/managedInstances/serverTrustCertificates@2022-05-01-preview";
  }

  protected getResourceBody(props: SqlManagedinstancesServertrustcertificatesProps): string {
    return JSON.stringify(
        {properties: {publicBlob: "string"}}
    );
  }
}
