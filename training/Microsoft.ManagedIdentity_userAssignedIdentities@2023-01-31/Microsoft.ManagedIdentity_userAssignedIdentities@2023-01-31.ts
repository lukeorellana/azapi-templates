import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface ManagedidentityUserassignedidentitiesProps extends IAzAPIBaseProps {

}

export class ManagedidentityUserassignedidentities extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ManagedidentityUserassignedidentitiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ManagedIdentity/userAssignedIdentities@2023-01-31";
  }

  protected getResourceBody(props: ManagedidentityUserassignedidentitiesProps): string {
    return JSON.stringify(
      
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource name | string (required)Character limit: 3-128Valid characters:Alphanumerics, hyphens, and underscoresStart with letter or number. |
// | location | The geo-location where the resource lives | string (required) |
// | tags | Resource tags. | Dictionary of tag names and values. SeeTags in templates |
