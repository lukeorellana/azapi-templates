import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CognitiveservicesAccountsDeploymentsProps extends IAzAPIBaseProps {
/**
   * The resource model definition representing SKU
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:accounts;

/**
   * Properties of Cognitive Services account deployment model.
   */
readonly model?: DeploymentModel;

/**
   * The name of RAI policy.
   */
readonly raiPolicyName?: string;

/**
   * Properties of Cognitive Services account deployment model.
   */
readonly scaleSettings?: DeploymentScaleSettings;

/**
   * Deployment model version upgrade option.
   */
readonly versionUpgradeOption?: 'NoAutoUpgrade''OnceCurrentVersionExpired''OnceNewDefaultVersionAvailable';

/**
   * Deployment model format.
   */
readonly format?: string;

/**
   * Optional. Deployment model source ARM resource ID.
   */
readonly source?: string;

/**
   * Optional. Deployment model version. If version is not specified, a default version will be assigned. The default version is different for different models and might change when there is new version available for a model. Default version for a model could be found from list models API.
   */
readonly version?: string;

/**
   * Deployment capacity.
   */
readonly capacity?: number;

/**
   * Deployment scale type.
   */
readonly scaleType?: 'Manual''Standard';

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
 * CognitiveservicesAccountsDeployments resource
 */
export class CognitiveservicesAccountsDeployments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CognitiveservicesAccountsDeploymentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CognitiveServices/accounts/deployments@2023-05-01";
  }

  protected getResourceBody(props: CognitiveservicesAccountsDeploymentsProps): string {
    return JSON.stringify(
        {properties: {model: {format: "string", name: "string", source: "string", version: "string"}, raiPolicyName: "string", scaleSettings: {capacity: "${int}", scaleType: "string"}, versionUpgradeOption: "string"}, sku: {capacity: "${int}", family: "string", name: "string", size: "string", tier: "string"}}
    );
  }
}
