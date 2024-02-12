import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworksecurityperimetersProfilesAccessrulesProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworksecurityperimetersProfilesAccessrules resource
 */
export class NetworkNetworksecurityperimetersProfilesAccessrules extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworksecurityperimetersProfilesAccessrulesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkSecurityPerimeters/profiles/accessRules@2021-02-01-preview";
  }

  protected getResourceBody(props: NetworkNetworksecurityperimetersProfilesAccessrulesProps): string {
    return JSON.stringify(
        {properties: {addressPrefixes: ["string"], direction: "string", emailAddresses: ["string"], fullyQualifiedDomainNames: ["string"], phoneNumbers: ["string"], subscriptions: [{id: "string"}]}}
    );
  }
}
