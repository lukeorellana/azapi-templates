import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DesktopvirtualizationApplicationgroupsApplicationsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:applicationGroups;

/**
   * Resource Type of Application.
   */
readonly applicationType?: 'InBuilt''MsixApplication';

/**
   * Command Line Arguments for Application.
   */
readonly commandLineArguments?: string;

/**
   * Specifies whether this published application can be launched with command line arguments provided by the client, command line arguments specified at publish time, or no command line arguments at all.
   */
readonly commandLineSetting: 'Allow''DoNotAllow''Require';

/**
   * Description of Application.
   */
readonly description?: string;

/**
   * Specifies a path for the executable file for the application.
   */
readonly filePath?: string;

/**
   * Friendly name of Application.
   */
readonly friendlyName?: string;

/**
   * Index of the icon.
   */
readonly iconIndex?: number;

/**
   * Path to icon.
   */
readonly iconPath?: string;

/**
   * Specifies the package application Id for MSIX applications
   */
readonly msixPackageApplicationId?: string;

/**
   * Specifies the package family name for MSIX applications
   */
readonly msixPackageFamilyName?: string;

/**
   * Specifies whether to show the RemoteApp program in the RD Web Access server.
   */
readonly showInPortal?: bool;
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
