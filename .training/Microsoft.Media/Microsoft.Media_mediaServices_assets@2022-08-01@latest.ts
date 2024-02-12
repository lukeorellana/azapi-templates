import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface MediaMediaservicesAssetsProps extends IAzAPIBaseProps {

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
