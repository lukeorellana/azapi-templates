import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlserverinstancesSqlavailabilitygroupsProps extends IAzAPIBaseProps {

}

/**
 * AzurearcdataSqlserverinstancesSqlavailabilitygroups resource
 */
export class AzurearcdataSqlserverinstancesSqlavailabilitygroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlserverinstancesSqlavailabilitygroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlServerInstances/sqlAvailabilityGroups@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlserverinstancesSqlavailabilitygroupsProps): string {
    return JSON.stringify(
        {properties: {availabilityGroupId: "string", availabilityGroupName: "string", configure: {availabilityModeDesc: "string", backupPriority: "${int}", createDate: "string", endpointUrl: "string", failoverModeDesc: "string", modifyDate: "string", primaryRoleAllowConnectionsDesc: "string", readOnlyRoutingUrl: "string", readWriteRoutingUrl: "string", secondaryRoleAllowConnectionsDesc: "string", seedingModeDesc: "string", sessionTimeout: "${int}"}, state: {availabilityGroupReplicaRole: "string", connectedStateDesc: "string", lastConnectErrorDescription: "string", lastConnectErrorTimestamp: "string", operationalStateDesc: "string", recoveryHealthDesc: "string", synchronizationHealthDesc: "string"}}}
    );
  }
}
