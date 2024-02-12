import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface InsightsDatacollectionendpointsProps extends IAzAPIBaseProps {

}

export class InsightsDatacollectionendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: InsightsDatacollectionendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Insights/dataCollectionEndpoints@2022-06-01";
  }

  protected getResourceBody(props: InsightsDatacollectionendpointsProps): string {
    return JSON.stringify(
      {properties: {configurationAccess: {}, description: "string", immutableId: "string", logsIngestion: {}, metricsIngestion: {}, networkAcls: {publicNetworkAccess: "string"}}, kind: "string"}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required) |
// | location | The geo-location where the resource lives. | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
// | kind | The kind of the resource. | 'Linux''Windows' |
// | identity | Managed service identity of the resource. | DataCollectionEndpointResourceIdentity |
// | properties | Resource properties. | DataCollectionEndpointResourceProperties |

// | Name | Description | Value |
// |-|-|-|
// | type | Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). | 'None''SystemAssigned''SystemAssigned,UserAssigned''UserAssigned' (required) |
// | userAssignedIdentities | The set of user assigned identities associated with the resource. The userAssignedIdentities dictionary keys will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}. The dictionary values can be empty objects ({}) in requests. | object |

// | Name | Description | Value |
// |-|-|-|
// | configurationAccess | The endpoint used by clients to access their configuration. | DataCollectionEndpointConfigurationAccess |
// | description | Description of the data collection endpoint. | string |
// | immutableId | The immutable ID of this data collection endpoint resource. This property is READ-ONLY. | string |
// | logsIngestion | The endpoint used by clients to ingest logs. | DataCollectionEndpointLogsIngestion |
// | metricsIngestion | The endpoint used by clients to ingest metrics. | DataCollectionEndpointMetricsIngestion |
// | networkAcls | Network access control rules for the endpoints. | DataCollectionEndpointNetworkAcls |

// | Name | Description | Value |
// |-|-|-|
// | publicNetworkAccess | The configuration to set whether network access from public internet to the endpoints are allowed. | 'Disabled''Enabled''SecuredByPerimeter' |
