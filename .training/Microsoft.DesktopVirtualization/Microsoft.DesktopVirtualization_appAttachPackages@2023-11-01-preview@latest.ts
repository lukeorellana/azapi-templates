import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationAppattachpackagesProps extends IAzAPIBaseProps {

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
