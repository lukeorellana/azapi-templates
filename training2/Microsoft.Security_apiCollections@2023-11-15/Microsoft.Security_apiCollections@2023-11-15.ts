import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityApicollectionsProps extends IAzAPIBaseProps {
/**
   * Use when creating an extension resource at a scope that is different than the deployment scope.
   */
readonly scope?: Target resourceFor Bicep, set this property to the symbolic name of the resource to apply theextension resource.;
}

/**
 * SecurityApicollections resource
 */
export class SecurityApicollections extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityApicollectionsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.Security/apiCollections@2023-11-15";
  }

  protected getResourceBody(props: SecurityApicollectionsProps): string {
    return JSON.stringify(
        
    );
  }
}
