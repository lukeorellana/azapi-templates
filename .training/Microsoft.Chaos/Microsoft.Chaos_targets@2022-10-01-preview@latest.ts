import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ChaosTargetsProps extends IAzAPIBaseProps {

}

/**
 * ChaosTargets resource
 */
export class ChaosTargets extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ChaosTargetsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Chaos/targets@2022-10-01-preview";
  }

  protected getResourceBody(props: ChaosTargetsProps): string {
    return JSON.stringify(
        {properties: {}}
    );
  }
}
