import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ResourcesTemplatespecsProps extends IAzAPIBaseProps {

}

/**
 * ResourcesTemplatespecs resource
 */
export class ResourcesTemplatespecs extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ResourcesTemplatespecsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Resources/templateSpecs@2022-02-01";
  }

  protected getResourceBody(props: ResourcesTemplatespecsProps): string {
    return JSON.stringify(
        {properties: {description: "string", displayName: "string"}}
    );
  }
}
