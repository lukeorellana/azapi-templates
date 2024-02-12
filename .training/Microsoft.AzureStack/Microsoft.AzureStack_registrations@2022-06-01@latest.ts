import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackRegistrationsProps extends IAzAPIBaseProps {

}

/**
 * AzurestackRegistrations resource
 */
export class AzurestackRegistrations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackRegistrationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStack/registrations@2022-06-01";
  }

  protected getResourceBody(props: AzurestackRegistrationsProps): string {
    return JSON.stringify(
        {properties: {registrationToken: "string"}}
    );
  }
}
