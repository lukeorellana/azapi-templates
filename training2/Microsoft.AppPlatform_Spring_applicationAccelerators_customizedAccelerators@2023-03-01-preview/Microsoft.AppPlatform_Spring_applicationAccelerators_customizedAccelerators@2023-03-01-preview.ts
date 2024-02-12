import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AppplatformSpringApplicationacceleratorsCustomizedacceleratorsProps extends IAzAPIBaseProps {
/**
   * Sku of the customized accelerator resource
   */
readonly sku?: Sku;

/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:applicationAccelerators;

/**
   * 
   */
readonly acceleratorTags?: string[];

/**
   * 
   */
readonly description?: string;

/**
   * 
   */
readonly displayName?: string;

/**
   * 
   */
readonly gitRepository: AcceleratorGitRepository;

/**
   * 
   */
readonly iconUrl?: string;

/**
   * Properties of the auth setting payload.
   */
readonly authSetting: AcceleratorAuthSetting;

/**
   * Git repository branch to be used.
   */
readonly branch?: string;

/**
   * Git repository commit to be used.
   */
readonly commit?: string;

/**
   * Git repository tag to be used.
   */
readonly gitTag?: string;

/**
   * Interval for checking for updates to Git or image repository.
   */
readonly intervalInSeconds?: number;

/**
   * Git repository URL for the accelerator.
   */
readonly url: string;

/**
   * Set the object type
   */
readonly authType: BasicAuthPublicSSH;

/**
   * The type of the auth setting.
   */
readonly authType: 'BasicAuth';

/**
   * Resource Id of CA certificate for https URL of Git repository.
   */
readonly caCertResourceId?: string;

/**
   * Password of git repository basic auth.
   */
readonly password?: string;

/**
   * Username of git repository basic auth.
   */
readonly username: string;

/**
   * The type of the auth setting.
   */
readonly authType: 'Public';

/**
   * Resource Id of CA certificate for https URL of Git repository.
   */
readonly caCertResourceId?: string;

/**
   * The type of the auth setting.
   */
readonly authType: 'SSH';

/**
   * Public SSH Key of git repository.
   */
readonly hostKey?: string;

/**
   * SSH Key algorithm of git repository.
   */
readonly hostKeyAlgorithm?: string;

/**
   * Private SSH Key algorithm of git repository.
   */
readonly privateKey?: string;

/**
   * Current capacity of the target resource
   */
readonly capacity?: number;

/**
   * Tier of the Sku
   */
readonly tier?: string;
}

/**
 * AppplatformSpringApplicationacceleratorsCustomizedaccelerators resource
 */
export class AppplatformSpringApplicationacceleratorsCustomizedaccelerators extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AppplatformSpringApplicationacceleratorsCustomizedacceleratorsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AppPlatform/Spring/applicationAccelerators/customizedAccelerators@2023-03-01-preview";
  }

  protected getResourceBody(props: AppplatformSpringApplicationacceleratorsCustomizedacceleratorsProps): string {
    return JSON.stringify(
        {properties: {acceleratorTags: ["string"], description: "string", displayName: "string", gitRepository: {authSetting: {authType: "string"}, branch: "string", commit: "string", gitTag: "string", intervalInSeconds: "${int}", url: "string"}, iconUrl: "string"}, sku: {capacity: "${int}", name: "string", tier: "string"}}
    );
  }
}
