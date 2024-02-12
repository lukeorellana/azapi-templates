import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningCommitmentplansProps extends IAzAPIBaseProps {
/**
   * The commitment plan SKU.
   */
readonly sku?: ResourceSku;

/**
   * An entity tag used to enforce optimistic concurrency.
   */
readonly etag?: string;

/**
   * The scale-out capacity of the resource. 1 is 1x, 2 is 2x, etc. This impacts the quantities and cost of any commitment plan resource.
   */
readonly capacity?: number;

/**
   * The SKU tier. Along with name, uniquely identifies the SKU.
   */
readonly tier?: string;
}

/**
 * MachinelearningCommitmentplans resource
 */
export class MachinelearningCommitmentplans extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MachinelearningCommitmentplansProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.MachineLearning/commitmentPlans@2016-05-01-preview";
  }

  protected getResourceBody(props: MachinelearningCommitmentplansProps): string {
    return JSON.stringify(
        {sku: {capacity: "${int}", name: "string", tier: "string"}, etag: "string"}
    );
  }
}
