import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CognitiveservicesCommitmentplansAccountassociationsProps extends IAzAPIBaseProps {

}

/**
 * CognitiveservicesCommitmentplansAccountassociations resource
 */
export class CognitiveservicesCommitmentplansAccountassociations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CognitiveservicesCommitmentplansAccountassociationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CognitiveServices/commitmentPlans/accountAssociations@2023-05-01";
  }

  protected getResourceBody(props: CognitiveservicesCommitmentplansAccountassociationsProps): string {
    return JSON.stringify(
        {properties: {accountId: "string"}}
    );
  }
}
