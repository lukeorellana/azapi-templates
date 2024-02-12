import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AutomationAutomationaccountsRuntimeenvironmentsPackagesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:runtimeEnvironments;

/**
   * The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location'
   */
readonly allOf?: TrackedResource;

/**
   * Gets or sets the package content link.
   */
readonly contentLink: ContentLink;

/**
   * Gets or sets the hash.
   */
readonly contentHash?: ContentHash;

/**
   * Gets or sets the uri of content.
   */
readonly uri?: string;

/**
   * Gets or sets the version of the content.
   */
readonly version?: string;

/**
   * Gets or sets the content hash algorithm used to hash the content.
   */
readonly algorithm: string;

/**
   * Gets or sets expected hash value of the content.
   */
readonly value: string;
}

/**
 * AutomationAutomationaccountsRuntimeenvironmentsPackages resource
 */
export class AutomationAutomationaccountsRuntimeenvironmentsPackages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AutomationAutomationaccountsRuntimeenvironmentsPackagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Automation/automationAccounts/runtimeEnvironments/packages@2023-05-15-preview";
  }

  protected getResourceBody(props: AutomationAutomationaccountsRuntimeenvironmentsPackagesProps): string {
    return JSON.stringify(
        {properties: {contentLink: {contentHash: {algorithm: "string", value: "string"}, uri: "string", version: "string"}}, allOf: {location: "string", tags: {}}}
    );
  }
}
