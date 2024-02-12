import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzurearcdataPostgresinstancesProps extends IAzAPIBaseProps {

}

/**
 * AzurearcdataPostgresinstances resource
 */
export class AzurearcdataPostgresinstances extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzurearcdataPostgresinstancesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureArcData/postgresInstances@2023-03-15-preview";
  }

  protected getResourceBody(props: AzurearcdataPostgresinstancesProps): string {
    return JSON.stringify(
        {properties: {admin: "string", basicLoginInformation: {password: "string", username: "string"}, dataControllerId: "string", lastUploadedDate: "string"}, sku: {capacity: "${int}", dev: "${bool}", family: "string", name: "string", size: "string", tier: "Hyperscale"}, extendedLocation: {name: "string", type: "CustomLocation"}}
    );
  }
}
