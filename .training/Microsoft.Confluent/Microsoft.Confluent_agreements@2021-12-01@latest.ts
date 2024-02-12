import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ConfluentAgreementsProps extends IAzAPIBaseProps {

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
