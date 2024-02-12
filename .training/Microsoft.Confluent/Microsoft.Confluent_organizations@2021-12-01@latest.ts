import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConfluentOrganizationsProps extends IAzAPIBaseProps {

}

/**
 * ConfluentOrganizations resource
 */
export class ConfluentOrganizations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConfluentOrganizationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Confluent/organizations@2021-12-01";
  }

  protected getResourceBody(props: ConfluentOrganizationsProps): string {
    return JSON.stringify(
        {properties: {offerDetail: {id: "string", planId: "string", planName: "string", publisherId: "string", termUnit: "string"}, userDetail: {emailAddress: "string", firstName: "string", lastName: "string"}}}
    );
  }
}
