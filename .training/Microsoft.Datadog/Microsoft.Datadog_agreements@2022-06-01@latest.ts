import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DatadogAgreementsProps extends IAzAPIBaseProps {

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
