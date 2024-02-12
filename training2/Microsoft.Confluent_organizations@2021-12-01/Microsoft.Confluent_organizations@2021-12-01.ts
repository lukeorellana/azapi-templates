import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConfluentOrganizationsProps extends IAzAPIBaseProps {
/**
   * Confluent offer detail
   */
readonly offerDetail: OfferDetail;

/**
   * Subscriber detail
   */
readonly userDetail: UserDetail;

/**
   * Offer Id
   */
readonly id: string;

/**
   * Offer Plan Id
   */
readonly planId: string;

/**
   * Offer Plan Name
   */
readonly planName: string;

/**
   * Publisher Id
   */
readonly publisherId: string;

/**
   * Offer Plan Term unit
   */
readonly termUnit: string;

/**
   * Email address
   */
readonly emailAddress: string;

/**
   * First name
   */
readonly firstName?: string;

/**
   * Last name
   */
readonly lastName?: string;
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
