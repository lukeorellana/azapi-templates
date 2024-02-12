import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityPricingsProps extends IAzAPIBaseProps {
/**
   * Optional. List of extensions offered under a plan.
   */
readonly extensions?: Extension[];

/**
   * The pricing tier value. Microsoft Defender for Cloud is provided in two pricing tiers: free and standard. The standard tier offers advanced security capabilities, while the free tier offers basic security features.
   */
readonly pricingTier: 'Free''Standard';

/**
   * The sub-plan selected for a Standard pricing configuration, when more than one sub-plan is available. Each sub-plan enables a set of security features. When not specified, full plan is applied.
   */
readonly subPlan?: string;

/**
   * Property values associated with the extension.
   */
readonly additionalExtensionProperties?: ExtensionAdditionalExtensionProperties;

/**
   * Indicates whether the extension is enabled.
   */
readonly isEnabled: 'False''True';

/**
   * 
   */
readonly {customized property}?: For Bicep, you can use theany()function.;
}

/**
 * SecurityPricings resource
 */
export class SecurityPricings extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityPricingsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/pricings@2023-01-01";
  }

  protected getResourceBody(props: SecurityPricingsProps): string {
    return JSON.stringify(
        {properties: {extensions: [{additionalExtensionProperties: {}, isEnabled: "string", name: "string"}], pricingTier: "string", subPlan: "string"}}
    );
  }
}
