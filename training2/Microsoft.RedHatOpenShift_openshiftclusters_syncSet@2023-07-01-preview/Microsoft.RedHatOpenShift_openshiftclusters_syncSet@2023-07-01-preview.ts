import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface RedhatopenshiftOpenshiftclustersSyncsetProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:openshiftclusters;

/**
   * Resources represents the SyncSets configuration.
   */
readonly resources?: string;
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
