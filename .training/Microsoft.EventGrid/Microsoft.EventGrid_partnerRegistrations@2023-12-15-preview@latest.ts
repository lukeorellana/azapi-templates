import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridPartnerregistrationsProps extends IAzAPIBaseProps {

}

/**
 * EventgridPartnerregistrations resource
 */
export class EventgridPartnerregistrations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridPartnerregistrationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/partnerRegistrations@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridPartnerregistrationsProps): string {
    return JSON.stringify(
        {properties: {partnerRegistrationImmutableId: "string"}}
    );
  }
}
