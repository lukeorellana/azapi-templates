import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DigitaltwinsDigitaltwinsinstancesTimeseriesdatabaseconnectionsProps extends IAzAPIBaseProps {

}

/**
 * DigitaltwinsDigitaltwinsinstancesTimeseriesdatabaseconnections resource
 */
export class DigitaltwinsDigitaltwinsinstancesTimeseriesdatabaseconnections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DigitaltwinsDigitaltwinsinstancesTimeseriesdatabaseconnectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DigitalTwins/digitalTwinsInstances/timeSeriesDatabaseConnections@2023-01-31";
  }

  protected getResourceBody(props: DigitaltwinsDigitaltwinsinstancesTimeseriesdatabaseconnectionsProps): string {
    return JSON.stringify(
        {properties: {identity: {type: "string", userAssignedIdentity: "string"}, connectionType: "string"}}
    );
  }
}
