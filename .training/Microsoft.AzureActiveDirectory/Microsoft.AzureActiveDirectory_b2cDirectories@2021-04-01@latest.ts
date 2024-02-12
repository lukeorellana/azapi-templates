import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface AzureactivedirectoryB2CdirectoriesProps extends IAzAPIBaseProps {

}

/**
 * AzureactivedirectoryB2Cdirectories resource
 */
export class AzureactivedirectoryB2Cdirectories extends AzAPIBase {
  constructor(scope: Construct, id: string, props: AzureactivedirectoryB2CdirectoriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.AzureActiveDirectory/b2cDirectories@2021-04-01";
  }

  protected getResourceBody(props: AzureactivedirectoryB2CdirectoriesProps): string {
    return JSON.stringify(
        {properties: {createTenantProperties: {countryCode: "string", displayName: "string"}}, sku: {name: "string", tier: "A0"}}
    );
  }
}
