import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsCasesCommentsProps extends IAzAPIBaseProps {
/**
   * In Bicep, you can specify the parent resource for a child resource. You only need to add this property when the child resource is declared outside of the parent resource.For more information, seeChild resource outside parent resource.
   */
readonly parent?: Symbolic name for resource of type:cases;

/**
   * The comment message
   */
readonly message: string;
}

/**
 * SecurityinsightsCasesComments resource
 */
export class SecurityinsightsCasesComments extends AzAPIBase {
  constructor(scope: Construct, id: string, props: SecurityinsightsCasesCommentsProps) {
    super(scope, id, props);
  }

  protected getResourceType(): string {
    return "Microsoft.SecurityInsights/cases/comments@2019-01-01-preview";
  }

  protected getResourceBody(props: SecurityinsightsCasesCommentsProps): string {
    return JSON.stringify(
        {properties: {message: "string"}}
    );
  }
}
