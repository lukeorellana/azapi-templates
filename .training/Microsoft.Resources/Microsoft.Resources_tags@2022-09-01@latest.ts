import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ResourcesTagsProps extends IAzAPIBaseProps {

}

/**
 * ResourcesTags resource
 */
export class ResourcesTags extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ResourcesTagsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Resources/tags@2022-09-01";
  }

  protected getResourceBody(props: ResourcesTagsProps): string {
    return JSON.stringify(
        {properties: {tags: {tagName1: "tagValue1", tagName2: "tagValue2"}}}
    );
  }
}
