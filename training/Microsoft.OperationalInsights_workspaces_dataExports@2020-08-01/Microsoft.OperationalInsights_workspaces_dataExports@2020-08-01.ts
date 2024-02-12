import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface OperationalinsightsWorkspacesDataexportsProps extends IAzAPIBaseProps {

}

export class OperationalinsightsWorkspacesDataexports extends AzAPIBase {
  constructor(scope: Construct, id: string, props: OperationalinsightsWorkspacesDataexportsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.OperationalInsights/workspaces/dataExports@2020-08-01";
  }

  protected getResourceBody(props: OperationalinsightsWorkspacesDataexportsProps): string {
    return JSON.stringify(
      {properties: {createdDate: "string", dataExportId: "string", destination: {metaData: {eventHubName: "string"}, resourceId: "string"}, enable: "${bool}", lastModifiedDate: "string", tableNames: ["string"]}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:workspaces |
// | properties | data export properties. | DataExportProperties |

// | Name | Description | Value |
// |-|-|-|
// | createdDate | The latest data export rule modification time. | string |
// | dataExportId | The data export rule ID. | string |
// | destination | destination properties. | Destination |
// | enable | Active when enabled. | bool |
// | lastModifiedDate | Date and time when the export was last modified. | string |
// | tableNames | An array of tables to export, for example: [âHeartbeat, SecurityEventâ]. | string[] (required) |

// | Name | Description | Value |
// |-|-|-|
// | metaData | destination meta data. | DestinationMetaData |
// | resourceId | The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure. | string (required) |

// | Name | Description | Value |
// |-|-|-|
// | eventHubName | Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account. | string |
