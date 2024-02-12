import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicelinkerDryrunsProps extends IAzAPIBaseProps {

}

/**
 * ServicelinkerDryruns resource
 */
export class ServicelinkerDryruns extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicelinkerDryrunsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceLinker/dryruns@2022-11-01-preview";
  }

  protected getResourceBody(props: ServicelinkerDryrunsProps): string {
    return JSON.stringify(
        {properties: {parameters: {actionName: "string"}}}
    );
  }
}
