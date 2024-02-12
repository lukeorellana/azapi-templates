import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RedhatopenshiftOpenshiftclustersSyncsetProps extends IAzAPIBaseProps {

}

/**
 * RedhatopenshiftOpenshiftclustersSyncset resource
 */
export class RedhatopenshiftOpenshiftclustersSyncset extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RedhatopenshiftOpenshiftclustersSyncsetProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RedHatOpenShift/openshiftclusters/syncSet@2023-07-01-preview";
  }

  protected getResourceBody(props: RedhatopenshiftOpenshiftclustersSyncsetProps): string {
    return JSON.stringify(
        {properties: {resources: "string"}}
    );
  }
}
