import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesProps extends IAzAPIBaseProps {

}

/**
 * CdnProfiles resource
 */
export class CdnProfiles extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesProps): string {
    return JSON.stringify(
        {properties: {originResponseTimeoutSeconds: "${int}"}, sku: {name: "string"}}
    );
  }
}
