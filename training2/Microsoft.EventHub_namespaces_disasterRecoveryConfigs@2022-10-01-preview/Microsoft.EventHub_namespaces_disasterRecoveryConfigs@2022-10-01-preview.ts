import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface EventhubNamespacesDisasterrecoveryconfigsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:namespaces;

/**
   * Alternate name specified when alias and namespace names are same.
   */
readonly alternateName?: string;

/**
   * ARM Id of the Primary/Secondary eventhub namespace name, which is part of GEO DR pairing
   */
readonly partnerNamespace?: string;
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
