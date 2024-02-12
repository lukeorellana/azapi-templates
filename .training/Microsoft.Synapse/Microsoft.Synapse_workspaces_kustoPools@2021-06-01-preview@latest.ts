import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesKustopoolsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesKustopools resource
 */
export class SynapseWorkspacesKustopools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesKustopoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/kustoPools@2021-06-01-preview";
  }

  protected getResourceBody(props: SynapseWorkspacesKustopoolsProps): string {
    return JSON.stringify(
        {properties: {enablePurge: "${bool}", enableStreamingIngest: "${bool}", optimizedAutoscale: {isEnabled: "${bool}", maximum: "${int}", minimum: "${int}", version: "${int}"}, workspaceUID: "string"}, sku: {capacity: "${int}", name: "string", size: "string"}}
    );
  }
}
