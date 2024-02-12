import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CognitiveservicesAccountsCommitmentplansProps extends IAzAPIBaseProps {
/**
   * The resource model definition representing SKU
   */
readonly sku?: Sku;

/**
   * The Kind of the resource.
   */
readonly kind?: string;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * AutoRenew commitment plan.
   */
readonly autoRenew?: bool;

/**
   * Commitment plan guid.
   */
readonly commitmentPlanGuid?: string;

/**
   * Cognitive Services account commitment period.
   */
readonly current?: CommitmentPeriod;

/**
   * Account hosting model.
   */
readonly hostingModel?: 'ConnectedContainer''DisconnectedContainer''ProvisionedWeb''Web';

/**
   * Cognitive Services account commitment period.
   */
readonly next?: CommitmentPeriod;

/**
   * Commitment plan type.
   */
readonly planType?: string;

/**
   * Commitment period commitment count.
   */
readonly count?: number;

/**
   * Commitment period commitment tier.
   */
readonly tier?: string;

/**
   * If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted.
   */
readonly capacity?: number;

/**
   * If the service has different generations of hardware, for the same SKU, then that can be captured here.
   */
readonly family?: string;

/**
   * The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code.
   */
readonly size?: string;

/**
   * This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT.
   */
readonly tier?: 'Basic''Enterprise''Free''Premium''Standard';
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
