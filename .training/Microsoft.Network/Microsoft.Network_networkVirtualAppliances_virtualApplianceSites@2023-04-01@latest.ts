import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface NetworkNetworkvirtualappliancesVirtualappliancesitesProps extends IAzAPIBaseProps {

}

/**
 * NetworkNetworkvirtualappliancesVirtualappliancesites resource
 */
export class NetworkNetworkvirtualappliancesVirtualappliancesites extends AzAPIBase {
  constructor(scope: Construct, id: string, props: NetworkNetworkvirtualappliancesVirtualappliancesitesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Network/networkVirtualAppliances/virtualApplianceSites@2023-04-01";
  }

  protected getResourceBody(props: NetworkNetworkvirtualappliancesVirtualappliancesitesProps): string {
    return JSON.stringify(
        {properties: {addressPrefix: "string", o365Policy: {breakOutCategories: {allow: "${bool}", default: "${bool}", optimize: "${bool}"}}}}
    );
  }
}
