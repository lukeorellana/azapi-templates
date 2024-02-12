import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataSqlavailabilitygroupsSqlserverinstancesProps extends IAzAPIBaseProps {

}

/**
 * AzurearcdataSqlavailabilitygroupsSqlserverinstances resource
 */
export class AzurearcdataSqlavailabilitygroupsSqlserverinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataSqlavailabilitygroupsSqlserverinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/sqlAvailabilityGroups/sqlServerInstances@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataSqlavailabilitygroupsSqlserverinstancesProps): string {
    return JSON.stringify(
        {properties: {configure: {availabilityModeDesc: "string", backupPriority: "${int}", createDate: "string", endpointUrl: "string", failoverModeDesc: "string", modifyDate: "string", primaryRoleAllowConnectionsDesc: "string", readOnlyRoutingUrl: "string", readWriteRoutingUrl: "string", secondaryRoleAllowConnectionsDesc: "string", seedingModeDesc: "string", sessionTimeout: "${int}"}, replicaId: "string", replicaName: "string", state: {availabilityGroupReplicaRole: "string", connectedStateDesc: "string", lastConnectErrorDescription: "string", lastConnectErrorTimestamp: "string", operationalStateDesc: "string", recoveryHealthDesc: "string", synchronizationHealthDesc: "string"}}}
    );
  }
}
