import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridPartnerdestinationsProps extends IAzAPIBaseProps {
/**
   * Activation state of the partner destination.
   */
readonly activationState?: 'Activated''NeverActivated';

/**
   * Endpoint Base URL of the partner destination
   */
readonly endpointBaseUrl?: string;

/**
   * Endpoint context associated with this partner destination.
   */
readonly endpointServiceContext?: string;

/**
   * Expiration time of the partner destination. If this timer expires and the partner destination was never activated,the partner destination and corresponding channel are deleted.
   */
readonly expirationTimeIfNotActivatedUtc?: string;

/**
   * Context or helpful message that can be used during the approval process.
   */
readonly messageForActivation?: string;

/**
   * The immutable Id of the corresponding partner registration.
   */
readonly partnerRegistrationImmutableId?: stringConstranumbers:Min length = 36Max length = 36Pattern =^[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$;
}

/**
 * EventgridPartnerdestinations resource
 */
export class EventgridPartnerdestinations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridPartnerdestinationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/partnerDestinations@2023-12-15-preview";
  }

  protected getResourceBody(props: EventgridPartnerdestinationsProps): string {
    return JSON.stringify(
        {properties: {activationState: "string", endpointBaseUrl: "string", endpointServiceContext: "string", expirationTimeIfNotActivatedUtc: "string", messageForActivation: "string", partnerRegistrationImmutableId: "string"}}
    );
  }
}
