import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridPartnerdestinationsProps extends IAzAPIBaseProps {

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
