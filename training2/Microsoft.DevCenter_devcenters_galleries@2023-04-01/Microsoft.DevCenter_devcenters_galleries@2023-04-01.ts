import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface DevcenterDevcentersGalleriesProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:devcenters;

/**
   * The resource ID of the backing Azure Compute Gallery.
   */
readonly galleryResourceId: string;
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
