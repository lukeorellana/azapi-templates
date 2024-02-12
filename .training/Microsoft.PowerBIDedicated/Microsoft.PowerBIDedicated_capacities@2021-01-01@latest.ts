import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerbidedicatedCapacitiesProps extends IAzAPIBaseProps {

}

/**
 * PowerbidedicatedCapacities resource
 */
export class PowerbidedicatedCapacities extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerbidedicatedCapacitiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerBIDedicated/capacities@2021-01-01";
  }

  protected getResourceBody(props: PowerbidedicatedCapacitiesProps): string {
    return JSON.stringify(
        {properties: {administration: {members: ["string"]}, mode: "string"}, systemData: {createdAt: "string", createdBy: "string", createdByType: "string", lastModifiedAt: "string", lastModifiedBy: "string", lastModifiedByType: "string"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
