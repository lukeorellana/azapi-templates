import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkvirtualappliancesVirtualappliancesitesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:networkVirtualAppliances;

/**
   * Address Prefix.
   */
readonly addressPrefix?: string;

/**
   * Office 365 Policy.
   */
readonly o365Policy?: Office365PolicyProperties;

/**
   * Office 365 breakout categories.
   */
readonly breakOutCategories?: BreakOutCategoryPolicies;

/**
   * Flag to control breakout of o365 allow category.
   */
readonly allow?: bool;

/**
   * Flag to control breakout of o365 default category.
   */
readonly default?: bool;

/**
   * Flag to control breakout of o365 optimize category.
   */
readonly optimize?: bool;
}

/**
 * NetworkNetworkvirtualappliancesVirtualappliancesites resource
 */
export class NetworkNetworkvirtualappliancesVirtualappliancesites extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkvirtualappliancesVirtualappliancesitesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkVirtualAppliances/virtualApplianceSites@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkvirtualappliancesVirtualappliancesitesProps): string {
    return JSON.stringify(
        {properties: {addressPrefix: "string", o365Policy: {breakOutCategories: {allow: "${bool}", default: "${bool}", optimize: "${bool}"}}}}
    );
  }
}
