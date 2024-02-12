import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityIotsecuritysolutionsProps extends IAzAPIBaseProps {

}

/**
 * SecurityIotsecuritysolutions resource
 */
export class SecurityIotsecuritysolutions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityIotsecuritysolutionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/iotSecuritySolutions@2019-08-01";
  }

  protected getResourceBody(props: SecurityIotsecuritysolutionsProps): string {
    return JSON.stringify(
        {properties: {additionalWorkspaces: [{dataTypes: ["string"], type: "Sentinel", workspace: "string"}], disabledDataSources: "TwinData", displayName: "string", export: "RawEvents", iotHubs: ["string"], recommendationsConfiguration: [{recommendationType: "string", status: "string"}], status: "string", unmaskedIpLoggingStatus: "string", userDefinedResources: {query: "string", querySubscriptions: ["string"]}, workspace: "string"}}
    );
  }
}
