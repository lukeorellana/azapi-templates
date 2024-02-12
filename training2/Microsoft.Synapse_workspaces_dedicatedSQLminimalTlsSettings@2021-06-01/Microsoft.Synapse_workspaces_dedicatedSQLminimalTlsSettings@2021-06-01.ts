import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesDedicatedsqlminimaltlssettingsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * The minimal tls version of the sql server.
   */
readonly minimalTlsVersion?: string;
}

/**
 * SynapseWorkspacesDedicatedsqlminimaltlssettings resource
 */
export class SynapseWorkspacesDedicatedsqlminimaltlssettings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesDedicatedsqlminimaltlssettingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/dedicatedSQLminimalTlsSettings@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesDedicatedsqlminimaltlssettingsProps): string {
    return JSON.stringify(
        {properties: {minimalTlsVersion: "string"}}
    );
  }
}
