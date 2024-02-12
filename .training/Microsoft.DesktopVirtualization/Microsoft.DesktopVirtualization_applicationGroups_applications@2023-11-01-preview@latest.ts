import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationApplicationgroupsApplicationsProps extends IAzAPIBaseProps {

}

/**
 * DesktopvirtualizationApplicationgroupsApplications resource
 */
export class DesktopvirtualizationApplicationgroupsApplications extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DesktopvirtualizationApplicationgroupsApplicationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DesktopVirtualization/applicationGroups/applications@2023-11-01-preview";
  }

  protected getResourceBody(props: DesktopvirtualizationApplicationgroupsApplicationsProps): string {
    return JSON.stringify(
        {properties: {applicationType: "string", commandLineArguments: "string", commandLineSetting: "string", description: "string", filePath: "string", friendlyName: "string", iconIndex: "${int}", iconPath: "string", msixPackageApplicationId: "string", msixPackageFamilyName: "string", showInPortal: "${bool}"}}
    );
  }
}
