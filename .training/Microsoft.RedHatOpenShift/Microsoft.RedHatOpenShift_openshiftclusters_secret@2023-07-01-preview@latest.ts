import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RedhatopenshiftOpenshiftclustersSecretProps extends IAzAPIBaseProps {

}

/**
 * RedhatopenshiftOpenshiftclustersSecret resource
 */
export class RedhatopenshiftOpenshiftclustersSecret extends AzAPIBase {
  constructor(scope: Construct, id: string, props: RedhatopenshiftOpenshiftclustersSecretProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.RedHatOpenShift/openshiftclusters/secret@2023-07-01-preview";
  }

  protected getResourceBody(props: RedhatopenshiftOpenshiftclustersSecretProps): string {
    return JSON.stringify(
        {properties: {secretResources: "string"}}
    );
  }
}
