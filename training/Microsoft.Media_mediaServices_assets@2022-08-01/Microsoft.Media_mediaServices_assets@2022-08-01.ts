import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

export interface MediaMediaservicesAssetsProps extends IAzAPIBaseProps {

}

export class MediaMediaservicesAssets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: MediaMediaservicesAssetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Media/mediaServices/assets@2022-08-01";
  }

  protected getResourceBody(props: MediaMediaservicesAssetsProps): string {
    return JSON.stringify(
      {properties: {alternateId: "string", container: "string", description: "string", storageAccountName: "string"}}
    );
  }
}

// | Name | Description | Value |
// |-|-|-|
// | name | The resource nameSee how to set names and types for child resources inBicep. | string (required) |
// | parent | In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource. | Symbolic name for resource of type:mediaServices |
// | properties | The resource properties. | AssetProperties |

// | Name | Description | Value |
// |-|-|-|
// | alternateId | The alternate ID of the Asset. | string |
// | container | The name of the asset blob container. | string |
// | description | The Asset description. | string |
// | storageAccountName | The name of the storage account. | string |
