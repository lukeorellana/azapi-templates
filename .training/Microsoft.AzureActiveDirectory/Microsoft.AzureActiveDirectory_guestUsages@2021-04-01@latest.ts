import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzureactivedirectoryGuestusagesProps extends IAzAPIBaseProps {

}

/**
 * AzureactivedirectoryGuestusages resource
 */
export class AzureactivedirectoryGuestusages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzureactivedirectoryGuestusagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureActiveDirectory/guestUsages@2021-04-01";
  }

  protected getResourceBody(props: AzureactivedirectoryGuestusagesProps): string {
    return JSON.stringify(
        {properties: {tenantId: "string"}}
    );
  }
}
