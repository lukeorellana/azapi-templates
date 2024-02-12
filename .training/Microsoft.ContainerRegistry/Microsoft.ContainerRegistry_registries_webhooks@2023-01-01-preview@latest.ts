import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ContainerregistryRegistriesWebhooksProps extends IAzAPIBaseProps {

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
