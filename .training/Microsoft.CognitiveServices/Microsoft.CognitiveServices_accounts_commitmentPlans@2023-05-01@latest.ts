import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CognitiveservicesAccountsCommitmentplansProps extends IAzAPIBaseProps {

}

/**
 * CognitiveservicesAccountsCommitmentplans resource
 */
export class CognitiveservicesAccountsCommitmentplans extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CognitiveservicesAccountsCommitmentplansProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CognitiveServices/accounts/commitmentPlans@2023-05-01";
  }

  protected getResourceBody(props: CognitiveservicesAccountsCommitmentplansProps): string {
    return JSON.stringify(
        {properties: {autoRenew: "${bool}", commitmentPlanGuid: "string", current: {count: "${int}", tier: "string"}, hostingModel: "string", next: {count: "${int}", tier: "string"}, planType: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}, kind: "string"}
    );
  }
}
