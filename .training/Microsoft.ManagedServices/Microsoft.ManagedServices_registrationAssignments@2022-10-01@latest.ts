import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ManagedservicesRegistrationassignmentsProps extends IAzAPIBaseProps {

}

/**
 * ManagedservicesRegistrationassignments resource
 */
export class ManagedservicesRegistrationassignments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagedservicesRegistrationassignmentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ManagedServices/registrationAssignments@2022-10-01";
  }

  protected getResourceBody(props: ManagedservicesRegistrationassignmentsProps): string {
    return JSON.stringify(
        {properties: {registrationDefinitionId: "string"}}
    );
  }
}
