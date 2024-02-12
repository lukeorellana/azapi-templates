import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface OperationalinsightsWorkspacesDataexportsProps extends IAzAPIBaseProps {

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
