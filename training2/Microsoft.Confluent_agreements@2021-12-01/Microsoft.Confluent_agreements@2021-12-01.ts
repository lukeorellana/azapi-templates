import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConfluentAgreementsProps extends IAzAPIBaseProps {
/**
   * If any version of the terms have been accepted, otherwise false.
   */
readonly accepted?: bool;

/**
   * Link to HTML with Microsoft and Publisher terms.
   */
readonly licenseTextLink?: string;

/**
   * Plan identifier string.
   */
readonly plan?: string;

/**
   * Link to the privacy policy of the publisher.
   */
readonly privacyPolicyLink?: string;

/**
   * Product identifier string.
   */
readonly product?: string;

/**
   * Publisher identifier string.
   */
readonly publisher?: string;

/**
   * Date and time in UTC of when the terms were accepted. This is empty if Accepted is false.
   */
readonly retrieveDatetime?: string;

/**
   * Terms signature.
   */
readonly signature?: string;
}

/**
 * ConfluentAgreements resource
 */
export class ConfluentAgreements extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ConfluentAgreementsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Confluent/agreements@2021-12-01";
  }

  protected getResourceBody(props: ConfluentAgreementsProps): string {
    return JSON.stringify(
        {properties: {accepted: "${bool}", licenseTextLink: "string", plan: "string", privacyPolicyLink: "string", product: "string", publisher: "string", retrieveDatetime: "string", signature: "string"}}
    );
  }
}
