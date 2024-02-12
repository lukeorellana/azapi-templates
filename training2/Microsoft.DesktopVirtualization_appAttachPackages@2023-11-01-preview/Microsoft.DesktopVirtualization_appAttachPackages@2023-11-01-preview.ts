import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationAppattachpackagesProps extends IAzAPIBaseProps {
/**
   * Parameter indicating how the health check should behave if this package fails staging
   */
readonly failHealthCheckOnStagingFailure?: 'DoNotFail''NeedsAssistance''Unhealthy';

/**
   * List of Hostpool resource Ids.
   */
readonly hostPoolReferences?: string[];

/**
   * Detailed properties for App Attach Package
   */
readonly image?: AppAttachPackageInfoProperties;

/**
   * URL of keyvault location to store certificate
   */
readonly keyVaultURL?: string;

/**
   * Date certificate expires, found in the appxmanifest.xml.
   */
readonly certificateExpiry?: string;

/**
   * Certificate name found in the appxmanifest.xml.
   */
readonly certificateName?: string;

/**
   * User friendly Name to be displayed in the portal.
   */
readonly displayName?: string;

/**
   * VHD/CIM image path on Network Share.
   */
readonly imagePath?: string;

/**
   * Make this version of the package the active one across the hostpool.
   */
readonly isActive?: bool;

/**
   * Is package timestamped so it can ignore the certificate expiry date
   */
readonly isPackageTimestamped?: 'NotTimestamped''Timestamped';

/**
   * Specifies how to register Package in feed.
   */
readonly isRegularRegistration?: bool;

/**
   * Date Package was last updated, found in the appxmanifest.xml.
   */
readonly lastUpdated?: string;

/**
   * Alias of App Attach Package. Assigned at import time
   */
readonly packageAlias?: string;

/**
   * List of package applications.
   */
readonly packageApplications?: MsixPackageApplications[];

/**
   * List of package dependencies.
   */
readonly packageDependencies?: MsixPackageDependencies[];

/**
   * Package Family Name from appxmanifest.xml. Contains Package Name and Publisher name.
   */
readonly packageFamilyName?: string;

/**
   * Package Full Name from appxmanifest.xml.
   */
readonly packageFullName?: string;

/**
   * Package Name from appxmanifest.xml.
   */
readonly packageName?: string;

/**
   * Relative Path to the package inside the image.
   */
readonly packageRelativePath?: string;

/**
   * Package Version found in the appxmanifest.xml.
   */
readonly version?: string;

/**
   * Package Application Id, found in appxmanifest.xml.
   */
readonly appId?: string;

/**
   * Used to activate Package Application. Consists of Package Name and ApplicationID. Found in appxmanifest.xml.
   */
readonly appUserModelID?: string;

/**
   * Description of Package Application.
   */
readonly description?: string;

/**
   * User friendly name.
   */
readonly friendlyName?: string;

/**
   * User friendly name.
   */
readonly iconImageName?: string;

/**
   * the icon a 64 bit string as a byte array.
   */
readonly rawIcon?: For Bicep, you can use theany()function.;

/**
   * the icon a 64 bit string as a byte array.
   */
readonly rawPng?: For Bicep, you can use theany()function.;

/**
   * Name of package dependency.
   */
readonly dependencyName?: string;

/**
   * Dependency version required.
   */
readonly minVersion?: string;

/**
   * Name of dependency publisher.
   */
readonly publisher?: string;
}

/**
 * DesktopvirtualizationAppattachpackages resource
 */
export class DesktopvirtualizationAppattachpackages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DesktopvirtualizationAppattachpackagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DesktopVirtualization/appAttachPackages@2023-11-01-preview";
  }

  protected getResourceBody(props: DesktopvirtualizationAppattachpackagesProps): string {
    return JSON.stringify(
        {properties: {failHealthCheckOnStagingFailure: "string", hostPoolReferences: ["string"], image: {certificateExpiry: "string", certificateName: "string", displayName: "string", imagePath: "string", isActive: "${bool}", isPackageTimestamped: "string", isRegularRegistration: "${bool}", lastUpdated: "string", packageAlias: "string", packageApplications: [{appId: "string", appUserModelID: "string", description: "string", friendlyName: "string", iconImageName: "string"}], packageDependencies: [{dependencyName: "string", minVersion: "string", publisher: "string"}], packageFamilyName: "string", packageFullName: "string", packageName: "string", packageRelativePath: "string", version: "string"}, keyVaultURL: "string"}}
    );
  }
}
