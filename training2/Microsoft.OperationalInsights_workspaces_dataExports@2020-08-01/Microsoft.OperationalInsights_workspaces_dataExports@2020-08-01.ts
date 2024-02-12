import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesDataexportsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:workspaces;

/**
   * The latest data export rule modification time.
   */
readonly createdDate?: string;

/**
   * The data export rule ID.
   */
readonly dataExportId?: string;

/**
   * destination properties.
   */
readonly destination?: Destination;

/**
   * Active when enabled.
   */
readonly enable?: bool;

/**
   * Date and time when the export was last modified.
   */
readonly lastModifiedDate?: string;

/**
   * An array of tables to export, for example: [âHeartbeat, SecurityEventâ].
   */
readonly tableNames: string[];

/**
   * destination meta data.
   */
readonly metaData?: DestinationMetaData;

/**
   * The destination resource ID. This can be copied from the Properties entry of the destination resource in Azure.
   */
readonly resourceId: string;

/**
   * Optional. Allows to define an Event Hub name. Not applicable when destination is Storage Account.
   */
readonly eventHubName?: string;
}

/**
 * OperationalinsightsWorkspacesDataexports resource
 */
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
