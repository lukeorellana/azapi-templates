import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ChaosTargetsCapabilitiesProps extends IAzAPIBaseProps {

}

/**
 * ChaosTargetsCapabilities resource
 */
export class ChaosTargetsCapabilities extends AzAPIBase {
  constructor(scope: Construct, id: string, props: ChaosTargetsCapabilitiesProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Chaos/targets/capabilities@2022-10-01-preview";
  }

  protected getResourceBody(props: ChaosTargetsCapabilitiesProps): string {
    return JSON.stringify(
        
    );
  }
}
