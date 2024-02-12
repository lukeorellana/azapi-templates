import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesAssetsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:mediaServices;

/**
   * The alternate ID of the Asset.
   */
readonly alternateId?: string;

/**
   * The name of the asset blob container.
   */
readonly container?: string;

/**
   * The Asset description.
   */
readonly description?: string;

/**
   * The name of the storage account.
   */
readonly storageAccountName?: string;
}

/**
 * MediaMediaservicesAssets resource
 */
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
