import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningservicesCapacityreserverationgroupsProps extends IAzAPIBaseProps {

}

/**
 * MachinelearningservicesCapacityreserverationgroups resource
 */
export class MachinelearningservicesCapacityreserverationgroups extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningservicesCapacityreserverationgroupsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearningServices/capacityReserverationGroups@2023-08-01-preview";
  }

  protected getResourceBody(props: MachinelearningservicesCapacityreserverationgroupsProps): string {
    return JSON.stringify(
        {properties: {offer: {offerName: "string", publisher: "string"}, reservedCapacity: "${int}"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: "string"}
    );
  }
}
