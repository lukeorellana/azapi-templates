import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackRegistrationsCustomersubscriptionsProps extends IAzAPIBaseProps {

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
