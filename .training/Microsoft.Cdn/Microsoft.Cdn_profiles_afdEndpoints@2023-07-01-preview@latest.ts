import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CdnProfilesAfdendpointsProps extends IAzAPIBaseProps {

}

/**
 * CdnProfilesAfdendpoints resource
 */
export class CdnProfilesAfdendpoints extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CdnProfilesAfdendpointsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Cdn/profiles/afdEndpoints@2023-07-01-preview";
  }

  protected getResourceBody(props: CdnProfilesAfdendpointsProps): string {
    return JSON.stringify(
        {properties: {autoGeneratedDomainNameLabelScope: "string", enabledState: "string"}}
    );
  }
}