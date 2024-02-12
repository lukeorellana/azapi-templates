import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomprovidersAssociationsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;

/**
   * The REST resource instance of the target resource for this association.
   */
readonly targetResourceId?: string;
}

/**
 * CustomprovidersAssociations resource
 */
export class CustomprovidersAssociations extends AzAPIBase {
  constructor(scope: Construct, id: string, props: CustomprovidersAssociationsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.CustomProviders/associations@2018-09-01-preview";
  }

  protected getResourceBody(props: CustomprovidersAssociationsProps): string {
    return JSON.stringify(
        {properties: {targetResourceId: "string"}}
    );
  }
}
