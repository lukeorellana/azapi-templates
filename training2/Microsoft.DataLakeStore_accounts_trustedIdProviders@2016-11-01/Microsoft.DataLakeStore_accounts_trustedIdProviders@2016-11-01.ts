import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatalakestoreAccountsTrustedidprovidersProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * The URL of this trusted identity provider.
   */
readonly idProvider: string;
}

/**
 * DatalakestoreAccountsTrustedidproviders resource
 */
export class DatalakestoreAccountsTrustedidproviders extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatalakestoreAccountsTrustedidprovidersProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataLakeStore/accounts/trustedIdProviders@2016-11-01";
  }

  protected getResourceBody(props: DatalakestoreAccountsTrustedidprovidersProps): string {
    return JSON.stringify(
        {properties: {idProvider: "string"}}
    );
  }
}
