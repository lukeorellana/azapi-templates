import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesWebhooksProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:registries;

/**
   * The list of actions that trigger the webhook to post notifications.
   */
readonly actions: String array containing any of:'chart_delete''chart_push''delete''push''quarantine';

/**
   * Custom headers that will be added to the webhook notifications.
   */
readonly customHeaders?: object;

/**
   * The scope of repositories where the event can be triggered. For example, 'foo:*' means events for all tags under repository 'foo'. 'foo:bar' means events for 'foo:bar' only. 'foo' is equivalent to 'foo:latest'. Empty means all events.
   */
readonly scope?: string;

/**
   * The service URI for the webhook to post notifications.
   */
readonly serviceUri: string;

/**
   * The status of the webhook at the time the operation was called.
   */
readonly status?: 'disabled''enabled';
}

/**
 * ContainerregistryRegistriesWebhooks resource
 */
export class ContainerregistryRegistriesWebhooks extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ContainerregistryRegistriesWebhooksProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ContainerRegistry/registries/webhooks@2023-01-01-preview";
  }

  protected getResourceBody(props: ContainerregistryRegistriesWebhooksProps): string {
    return JSON.stringify(
        {properties: {actions: ["string"], customHeaders: {}, scope: "string", serviceUri: "string", status: "string"}}
    );
  }
}
