import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurestackLinkedsubscriptionsProps extends IAzAPIBaseProps {

}

/**
 * AzurestackLinkedsubscriptions resource
 */
export class AzurestackLinkedsubscriptions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurestackLinkedsubscriptionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureStack/linkedSubscriptions@2020-06-01-preview";
  }

  protected getResourceBody(props: AzurestackLinkedsubscriptionsProps): string {
    return JSON.stringify(
        {properties: {linkedSubscriptionId: "string", registrationResourceId: "string"}}
    );
  }
}
