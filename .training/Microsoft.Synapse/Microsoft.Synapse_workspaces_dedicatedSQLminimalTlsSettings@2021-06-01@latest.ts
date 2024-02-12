import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesDedicatedsqlminimaltlssettingsProps extends IAzAPIBaseProps {

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
