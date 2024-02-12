import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface CustomprovidersAssociationsProps extends IAzAPIBaseProps {

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
