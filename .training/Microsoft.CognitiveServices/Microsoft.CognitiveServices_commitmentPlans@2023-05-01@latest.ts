import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CognitiveservicesCommitmentplansProps extends IAzAPIBaseProps {

}

/**
 * CognitiveservicesCommitmentplans resource
 */
export class CognitiveservicesCommitmentplans extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CognitiveservicesCommitmentplansProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CognitiveServices/commitmentPlans@2023-05-01";
  }

  protected getResourceBody(props: CognitiveservicesCommitmentplansProps): string {
    return JSON.stringify(
        {properties: {autoRenew: "${bool}", commitmentPlanGuid: "string", current: {count: "${int}", tier: "string"}, hostingModel: "string", next: {count: "${int}", tier: "string"}, planType: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: "string"}
    );
  }
}
