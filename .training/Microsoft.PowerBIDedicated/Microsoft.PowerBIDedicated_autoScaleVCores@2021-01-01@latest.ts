import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface PowerbidedicatedAutoscalevcoresProps extends IAzAPIBaseProps {

}

/**
 * PowerbidedicatedAutoscalevcores resource
 */
export class PowerbidedicatedAutoscalevcores extends AzAPIBase {
  constructor(scope: Construct, id: string, props: PowerbidedicatedAutoscalevcoresProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.PowerBIDedicated/autoScaleVCores@2021-01-01";
  }

  protected getResourceBody(props: PowerbidedicatedAutoscalevcoresProps): string {
    return JSON.stringify(
        {properties: {capacityLimit: "${int}", capacityObjectId: "string"}, systemData: {createdAt: "string", createdBy: "string", createdByType: "string", lastModifiedAt: "string", lastModifiedBy: "string", lastModifiedByType: "string"}, sku: {capacity: "${int}", name: "string", tier: "AutoScale"}}
    );
  }
}
