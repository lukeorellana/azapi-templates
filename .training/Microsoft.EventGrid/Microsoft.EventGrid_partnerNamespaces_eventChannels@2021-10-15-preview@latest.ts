import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventgridPartnernamespacesEventchannelsProps extends IAzAPIBaseProps {

}

/**
 * EventgridPartnernamespacesEventchannels resource
 */
export class EventgridPartnernamespacesEventchannels extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventgridPartnernamespacesEventchannelsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventGrid/partnerNamespaces/eventChannels@2021-10-15-preview";
  }

  protected getResourceBody(props: EventgridPartnernamespacesEventchannelsProps): string {
    return JSON.stringify(
        {properties: {destination: {azureSubscriptionId: "string", partnerTopicName: "string", resourceGroup: "string"}, expirationTimeIfNotActivatedUtc: "string", filter: {advancedFilters: [{key: "string", operatorType: "string"}], enableAdvancedFilteringOnArrays: "${bool}"}, partnerTopicFriendlyDescription: "string", source: {source: "string"}}}
    );
  }
}
