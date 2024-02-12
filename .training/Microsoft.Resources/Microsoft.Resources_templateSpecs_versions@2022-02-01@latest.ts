import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ResourcesTemplatespecsVersionsProps extends IAzAPIBaseProps {

}

/**
 * ResourcesTemplatespecsVersions resource
 */
export class ResourcesTemplatespecsVersions extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ResourcesTemplatespecsVersionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Resources/templateSpecs/versions@2022-02-01";
  }

  protected getResourceBody(props: ResourcesTemplatespecsVersionsProps): string {
    return JSON.stringify(
        {properties: {description: "string", linkedTemplates: [{path: "string"}]}}
    );
  }
}
