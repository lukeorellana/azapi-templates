import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SynapseWorkspacesBigdatapoolsProps extends IAzAPIBaseProps {

}

/**
 * SynapseWorkspacesBigdatapools resource
 */
export class SynapseWorkspacesBigdatapools extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SynapseWorkspacesBigdatapoolsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Synapse/workspaces/bigDataPools@2021-06-01";
  }

  protected getResourceBody(props: SynapseWorkspacesBigdatapoolsProps): string {
    return JSON.stringify(
        {properties: {autoPause: {delayInMinutes: "${int}", enabled: "${bool}"}, autoScale: {enabled: "${bool}", maxNodeCount: "${int}", minNodeCount: "${int}"}, customLibraries: [{containerName: "string", name: "string", path: "string", type: "string"}], defaultSparkLogFolder: "string", dynamicExecutorAllocation: {enabled: "${bool}", maxExecutors: "${int}", minExecutors: "${int}"}, isAutotuneEnabled: "${bool}", isComputeIsolationEnabled: "${bool}", libraryRequirements: {content: "string", filename: "string"}, nodeCount: "${int}", nodeSize: "string", nodeSizeFamily: "string", provisioningState: "string", sessionLevelPackagesEnabled: "${bool}", sparkConfigProperties: {configurationType: "string", content: "string", filename: "string"}, sparkEventsFolder: "string", sparkVersion: "string"}}
    );
  }
}
