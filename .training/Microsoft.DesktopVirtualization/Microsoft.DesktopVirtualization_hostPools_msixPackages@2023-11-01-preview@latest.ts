import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationHostpoolsMsixpackagesProps extends IAzAPIBaseProps {

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
