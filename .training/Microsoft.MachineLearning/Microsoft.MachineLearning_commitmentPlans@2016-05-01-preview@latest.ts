import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MachinelearningCommitmentplansProps extends IAzAPIBaseProps {

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
