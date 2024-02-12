import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface KubernetesconfigurationExtensionsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * Identity of the Extension resource
   */
readonly identity?: Identity;

/**
   * The plan information.
   */
readonly plan?: Plan;

/**
   * The identity type.
   */
readonly type?: 'SystemAssigned';

/**
   * The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding.
   */
readonly product: string;

/**
   * A publisher provided promotion code as provisioned in Data Market for the said product/artifact.
   */
readonly promotionCode?: string;

/**
   * The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic
   */
readonly publisher: string;

/**
   * The version of the desired product/artifact.
   */
readonly version?: string;

/**
   * Identity of the Extension resource in an AKS cluster
   */
readonly aksAssignedIdentity?: ExtensionPropertiesAksAssignedIdentity;

/**
   * Flag to note if this extension participates in auto upgrade of minor version, or not.
   */
readonly autoUpgradeMinorVersion?: bool;

/**
   * Configuration settings that are sensitive, as name-value pairs for configuring this extension.
   */
readonly configurationProtectedSettings?: object;

/**
   * Configuration settings, as name-value pairs for configuring this extension.
   */
readonly configurationSettings?: object;

/**
   * Type of the Extension, of which this resource is an instance of.  It must be one of the Extension Types registered with Microsoft.KubernetesConfiguration by the Extension publisher.
   */
readonly extensionType?: string;

/**
   * ReleaseTrain this extension participates in for auto-upgrade (e.g. Stable, Preview, etc.) - only if autoUpgradeMinorVersion is 'true'.
   */
readonly releaseTrain?: string;

/**
   * Scope at which the extension is installed.
   */
readonly scope?: Scope;

/**
   * Status from this extension.
   */
readonly statuses?: ExtensionStatus[];

/**
   * User-specified version of the extension for this extension to 'pin'. To use 'version', autoUpgradeMinorVersion must be 'false'.
   */
readonly version?: string;

/**
   * The identity type.
   */
readonly type?: 'SystemAssigned''UserAssigned';

/**
   * Specifies that the scope of the extension is Cluster
   */
readonly cluster?: ScopeCluster;

/**
   * Specifies that the scope of the extension is Namespace
   */
readonly namespace?: ScopeNamespace;

/**
   * Namespace where the extension Release must be placed, for a Cluster scoped extension.  If this namespace does not exist, it will be created
   */
readonly releaseNamespace?: string;

/**
   * Namespace where the extension will be created for an Namespace scoped extension.  If this namespace does not exist, it will be created
   */
readonly targetNamespace?: string;

/**
   * Status code provided by the Extension
   */
readonly code?: string;

/**
   * Short description of status of the extension.
   */
readonly displayStatus?: string;

/**
   * Level of the status.
   */
readonly level?: 'Error''Information''Warning';

/**
   * Detailed message of the status from the Extension.
   */
readonly message?: string;

/**
   * DateLiteral (per ISO8601) noting the time of installation status.
   */
readonly time?: string;
}

/**
 * KubernetesconfigurationExtensions resource
 */
export class KubernetesconfigurationExtensions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: KubernetesconfigurationExtensionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.KubernetesConfiguration/extensions@2022-11-01";
  }

  protected getResourceBody(props: KubernetesconfigurationExtensionsProps): string {
    return JSON.stringify(
        {properties: {aksAssignedIdentity: {type: "string"}, autoUpgradeMinorVersion: "${bool}", configurationProtectedSettings: {}, configurationSettings: {}, extensionType: "string", releaseTrain: "string", scope: {cluster: {releaseNamespace: "string"}, namespace: {targetNamespace: "string"}}, statuses: [{code: "string", displayStatus: "string", level: "string", message: "string", time: "string"}], version: "string"}, plan: {name: "string", product: "string", promotionCode: "string", publisher: "string", version: "string"}}
    );
  }
}
