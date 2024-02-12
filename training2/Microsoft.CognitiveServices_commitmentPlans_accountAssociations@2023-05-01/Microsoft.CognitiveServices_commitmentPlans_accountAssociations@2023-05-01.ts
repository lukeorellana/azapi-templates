import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CognitiveservicesCommitmentplansAccountassociationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:commitmentPlans;

/**
   * The Azure resource id of the account.
   */
readonly accountId?: string;
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
