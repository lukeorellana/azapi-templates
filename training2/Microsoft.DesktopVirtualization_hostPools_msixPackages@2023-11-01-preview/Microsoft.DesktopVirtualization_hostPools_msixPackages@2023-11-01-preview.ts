import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationHostpoolsMsixpackagesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:hostPools;

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
   * Specifies how to register Package in feed.
   */
readonly isRegularRegistration?: bool;

/**
   * Date Package was last updated, found in the appxmanifest.xml.
   */
readonly lastUpdated?: string;

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
 * DesktopvirtualizationHostpoolsMsixpackages resource
 */
export class DesktopvirtualizationHostpoolsMsixpackages extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DesktopvirtualizationHostpoolsMsixpackagesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DesktopVirtualization/hostPools/msixPackages@2023-11-01-preview";
  }

  protected getResourceBody(props: DesktopvirtualizationHostpoolsMsixpackagesProps): string {
    return JSON.stringify(
        {properties: {displayName: "string", imagePath: "string", isActive: "${bool}", isRegularRegistration: "${bool}", lastUpdated: "string", packageApplications: [{appId: "string", appUserModelID: "string", description: "string", friendlyName: "string", iconImageName: "string"}], packageDependencies: [{dependencyName: "string", minVersion: "string", publisher: "string"}], packageFamilyName: "string", packageName: "string", packageRelativePath: "string", version: "string"}}
    );
  }
}
