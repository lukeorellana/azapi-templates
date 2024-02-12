import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface GuestconfigurationGuestconfigurationassignmentsProps extends IAzAPIBaseProps {

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
