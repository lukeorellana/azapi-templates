import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ServicelinkerLocationsDryrunsProps extends IAzAPIBaseProps {

}

/**
 * ServicelinkerLocationsDryruns resource
 */
export class ServicelinkerLocationsDryruns extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ServicelinkerLocationsDryrunsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.ServiceLinker/locations/dryruns@2022-11-01-preview";
  }

  protected getResourceBody(props: ServicelinkerLocationsDryrunsProps): string {
    return JSON.stringify(
        {properties: {parameters: {actionName: "string"}}}
    );
  }
}
