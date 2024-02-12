import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatamigrationServicesProps extends IAzAPIBaseProps {

}

/**
 * DatamigrationServices resource
 */
export class DatamigrationServices extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatamigrationServicesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DataMigration/services@2022-03-30-preview";
  }

  protected getResourceBody(props: DatamigrationServicesProps): string {
    return JSON.stringify(
        {properties: {autoStopDelay: "string", deleteResourcesOnStop: "${bool}", publicKey: "string", virtualNicId: "string", virtualSubnetId: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: "string", etag: "string"}
    );
  }
}
