import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface WebStaticsitesProps extends IAzAPIBaseProps {
/**
   * Description of a SKU for a scalable resource.
   */
readonly sku?: SkuDescription;

/**
   * Kind of resource.
   */
readonly kind?: string;

/**
   * Managed service identity.
   */
readonly identity?: ManagedServiceIdentity;

/**
   * Type of managed service identity.
   */
readonly type?: 'None''SystemAssigned''SystemAssigned, UserAssigned''UserAssigned';

/**
   * The list of user assigned identities associated with the resource. The user identity dictionary key references will be ARM resource ids in the form: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ManagedIdentity/userAssignedIdentities/{identityName}
   */
readonly userAssignedIdentities?: object;

/**
   * falseif config file is locked for this static web app; otherwise,true.
   */
readonly allowConfigFileUpdates?: bool;

/**
   * The target branch in the repository.
   */
readonly branch?: string;

/**
   * Build properties to configure on the repository.
   */
readonly buildProperties?: StaticSiteBuildProperties;

/**
   * State indicating the status of the enterprise grade CDN serving traffic to the static web app.
   */
readonly enterpriseGradeCdnStatus?: 'Disabled''Disabling''Enabled''Enabling';

/**
   * The provider that submitted the last deployment to the primary environment of the static site.
   */
readonly provider?: string;

/**
   * State indicating whether public traffic are allowed or not for a static web app. Allowed Values: 'Enabled', 'Disabled' or an empty string.
   */
readonly publicNetworkAccess?: string;

/**
   * A user's github repository token. This is used to setup the Github Actions workflow file and API secrets.
   */
readonly repositoryToken?: string;

/**
   * URL for the repository of the static site.
   */
readonly repositoryUrl?: string;

/**
   * State indicating whether staging environments are allowed or not allowed for a static web app.
   */
readonly stagingEnvironmentPolicy?: 'Disabled''Enabled';

/**
   * Template options for generating a new repository.
   */
readonly templateProperties?: StaticSiteTemplateOptions;

/**
   * A custom command to run during deployment of the Azure Functions API application.
   */
readonly apiBuildCommand?: string;

/**
   * The path to the api code within the repository.
   */
readonly apiLocation?: string;

/**
   * Deprecated: The path of the app artifacts after building (deprecated in favor of OutputLocation)
   */
readonly appArtifactLocation?: string;

/**
   * A custom command to run during deployment of the static content application.
   */
readonly appBuildCommand?: string;

/**
   * The path to the app code within the repository.
   */
readonly appLocation?: string;

/**
   * Github Action secret name override.
   */
readonly githubActionSecretNameOverride?: string;

/**
   * The output path of the app after building.
   */
readonly outputLocation?: string;

/**
   * Skip Github Action workflow generation.
   */
readonly skipGithubActionWorkflowGeneration?: bool;

/**
   * Description of the newly generated repository.
   */
readonly description?: string;

/**
   * Whether or not the newly generated repository is a private repository. Defaults to false (i.e. public).
   */
readonly isPrivate?: bool;

/**
   * Owner of the newly generated repository.
   */
readonly owner?: string;

/**
   * Name of the newly generated repository.
   */
readonly repositoryName?: string;

/**
   * URL of the template repository. The newly generated repository will be based on this one.
   */
readonly templateRepositoryUrl?: string;

/**
   * Capabilities of the SKU, e.g., is traffic manager enabled?
   */
readonly capabilities?: Capability[];

/**
   * Current number of instances assigned to the resource.
   */
readonly capacity?: number;

/**
   * Family code of the resource SKU.
   */
readonly family?: string;

/**
   * Locations of the SKU.
   */
readonly locations?: string[];

/**
   * Size specifier of the resource SKU.
   */
readonly size?: string;

/**
   * Min, max, and default scale values of the SKU.
   */
readonly skuCapacity?: SkuCapacity;

/**
   * Service tier of the resource SKU.
   */
readonly tier?: string;

/**
   * Reason of the SKU capability.
   */
readonly reason?: string;

/**
   * Value of the SKU capability.
   */
readonly value?: string;

/**
   * Default number of workers for this App Service plan SKU.
   */
readonly default?: number;

/**
   * Maximum number of Elastic workers for this App Service plan SKU.
   */
readonly elasticMaximum?: number;

/**
   * Maximum number of workers for this App Service plan SKU.
   */
readonly maximum?: number;

/**
   * Minimum number of workers for this App Service plan SKU.
   */
readonly minimum?: number;

/**
   * Available scale configurations for an App Service plan.
   */
readonly scaleType?: string;
}

/**
 * WebStaticsites resource
 */
export class WebStaticsites extends AzAPIBase {
  constructor(scope: Construct, id: string, props: WebStaticsitesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Web/staticSites@2022-09-01";
  }

  protected getResourceBody(props: WebStaticsitesProps): string {
    return JSON.stringify(
        {properties: {allowConfigFileUpdates: "${bool}", branch: "string", buildProperties: {apiBuildCommand: "string", apiLocation: "string", appArtifactLocation: "string", appBuildCommand: "string", appLocation: "string", githubActionSecretNameOverride: "string", outputLocation: "string", skipGithubActionWorkflowGeneration: "${bool}"}, enterpriseGradeCdnStatus: "string", provider: "string", publicNetworkAccess: "string", repositoryToken: "string", repositoryUrl: "string", stagingEnvironmentPolicy: "string", templateProperties: {description: "string", isPrivate: "${bool}", owner: "string", repositoryName: "string", templateRepositoryUrl: "string"}}, sku: {capabilities: [{name: "string", reason: "string", value: "string"}], capacity: "${int}", family: "string", locations: ["string"], name: "string", size: "string", skuCapacity: {default: "${int}", elasticMaximum: "${int}", maximum: "${int}", minimum: "${int}", scaleType: "string"}, tier: "string"}, kind: "string"}
    );
  }
}
