import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface ChaosTargetsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;
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
