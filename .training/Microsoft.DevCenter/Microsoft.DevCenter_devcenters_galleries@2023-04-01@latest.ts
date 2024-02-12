import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterDevcentersGalleriesProps extends IAzAPIBaseProps {

}

/**
 * DevcenterDevcentersGalleries resource
 */
export class DevcenterDevcentersGalleries extends AzAPIBase {
  constructor(scope: Construct, id: string, props: DevcenterDevcentersGalleriesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.DevCenter/devcenters/galleries@2023-04-01";
  }

  protected getResourceBody(props: DevcenterDevcentersGalleriesProps): string {
    return JSON.stringify(
        {properties: {galleryResourceId: "string"}}
    );
  }
}
