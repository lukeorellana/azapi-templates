import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatadogAgreementsProps extends IAzAPIBaseProps {
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
 * DatadogAgreements resource
 */
export class DatadogAgreements extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DatadogAgreementsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Datadog/agreements@2022-06-01";
  }

  protected getResourceBody(props: DatadogAgreementsProps): string {
    return JSON.stringify(
        {properties: {accepted: "${bool}", licenseTextLink: "string", plan: "string", privacyPolicyLink: "string", product: "string", publisher: "string", retrieveDatetime: "string", signature: "string"}}
    );
  }
}
