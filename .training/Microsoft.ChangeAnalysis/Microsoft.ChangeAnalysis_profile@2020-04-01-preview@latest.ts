import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ChangeanalysisProfileProps extends IAzAPIBaseProps {

}

/**
 * ChangeanalysisProfile resource
 */
export class ChangeanalysisProfile extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ChangeanalysisProfileProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ChangeAnalysis/profile@2020-04-01-preview";
  }

  protected getResourceBody(props: ChangeanalysisProfileProps): string {
    return JSON.stringify(
        {properties: {notifications: {activationState: "string", azureMonitorWorkspaceProperties: {includeChangeDetails: "string", workspaceId: "string", workspaceResourceId: "string"}}}, systemData: {}}
    );
  }
}
