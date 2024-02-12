import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackRegistrationsCustomersubscriptionsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registrations;

/**
   * The entity tag used for optimistic concurrency when modifying the resource.
   */
readonly etag?: string;

/**
   * Tenant Id.
   */
readonly tenantId?: string;
}

/**
 * AzurestackRegistrationsCustomersubscriptions resource
 */
export class AzurestackRegistrationsCustomersubscriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackRegistrationsCustomersubscriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStack/registrations/customerSubscriptions@2022-06-01";
  }

  protected getResourceBody(props: AzurestackRegistrationsCustomersubscriptionsProps): string {
    return JSON.stringify(
        {properties: {tenantId: "string"}, etag: "string"}
    );
  }
}
