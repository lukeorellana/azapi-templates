import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridPartnerregistrationsProps extends IAzAPIBaseProps {
/**
   * The immutableId of the corresponding partner registration.Note: This property is marked for deprecation and is not supported in any future GA API version
   */
readonly partnerRegistrationImmutableId?: stringConstranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;
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
