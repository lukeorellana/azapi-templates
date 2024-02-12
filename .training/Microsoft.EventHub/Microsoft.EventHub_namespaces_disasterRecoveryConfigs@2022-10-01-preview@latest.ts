import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesDisasterrecoveryconfigsProps extends IAzAPIBaseProps {

}

/**
 * EventhubNamespacesDisasterrecoveryconfigs resource
 */
export class EventhubNamespacesDisasterrecoveryconfigs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: EventhubNamespacesDisasterrecoveryconfigsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.EventHub/namespaces/disasterRecoveryConfigs@2022-10-01-preview";
  }

  protected getResourceBody(props: EventhubNamespacesDisasterrecoveryconfigsProps): string {
    return JSON.stringify(
        {properties: {alternateName: "string", partnerNamespace: "string"}}
    );
  }
}
