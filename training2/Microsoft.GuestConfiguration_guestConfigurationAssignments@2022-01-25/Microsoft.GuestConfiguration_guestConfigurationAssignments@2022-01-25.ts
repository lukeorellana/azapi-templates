import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface GuestconfigurationGuestconfigurationassignmentsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The source which initiated the guest configuration assignment. Ex: Azure Policy
   */
readonly context?: string;

/**
   * The guest configuration to assign.
   */
readonly guestConfiguration?: GuestConfigurationNavigation;

/**
   * Last reported guest configuration assignment report.
   */
readonly latestAssignmentReport?: AssignmentReport;

/**
   * The list of VM Compliance data for VMSS
   */
readonly vmssVMList?: VmssvmInfo[];

/**
   * Specifies the assignment type and execution of the configuration. Possible values are Audit, DeployAndAutoCorrect, ApplyAndAutoCorrect and ApplyAndMonitor.
   */
readonly assignmentType?: 'ApplyAndAutoCorrect''ApplyAndMonitor''Audit''DeployAndAutoCorrect';

/**
   * The configuration parameters for the guest configuration.
   */
readonly configurationParameter?: ConfigurationParameter[];

/**
   * The protected configuration parameters for the guest configuration.
   */
readonly configurationProtectedParameter?: ConfigurationParameter[];

/**
   * Combined hash of the guest configuration package and configuration parameters.
   */
readonly contentHash?: string;

/**
   * Uri of the storage where guest configuration package is uploaded.
   */
readonly contentUri?: string;

/**
   * Kind of the guest configuration. For example:DSC
   */
readonly kind?: 'DSC';

/**
   * Version of the guest configuration.
   */
readonly version?: string;

/**
   * Value of the configuration parameter.
   */
readonly value?: string;

/**
   * Configuration details of the guest configuration assignment.
   */
readonly assignment?: AssignmentInfo;

/**
   * The list of resources for which guest configuration assignment compliance is checked.
   */
readonly resources?: AssignmentReportResource[];

/**
   * Information about the VM.
   */
readonly vm?: VMInfo;

/**
   * Information about the configuration.
   */
readonly configuration?: ConfigurationInfo;

/**
   * Compliance reason and reason code for a resource.
   */
readonly reasons?: AssignmentReportResourceComplianceReason[];
}

/**
 * GuestconfigurationGuestconfigurationassignments resource
 */
export class GuestconfigurationGuestconfigurationassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: GuestconfigurationGuestconfigurationassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.GuestConfiguration/guestConfigurationAssignments@2022-01-25";
  }

  protected getResourceBody(props: GuestconfigurationGuestconfigurationassignmentsProps): string {
    return JSON.stringify(
        {properties: {context: "string", guestConfiguration: {assignmentType: "string", configurationParameter: [{name: "string", value: "string"}], configurationProtectedParameter: [{name: "string", value: "string"}], contentHash: "string", contentUri: "string", kind: "DSC", name: "string", version: "string"}, latestAssignmentReport: {assignment: {configuration: {}}, resources: [{reasons: [{}]}], vm: {}}, vmssVMList: [{}]}}
    );
  }
}
