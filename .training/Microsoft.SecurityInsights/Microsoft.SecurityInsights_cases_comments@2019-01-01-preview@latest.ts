import { Construct } from "constructs";
import { AzAPIBase, IAzAPIBaseProps } from "./core-azapi";

/**
 * Interface representing the properties for instance pool configuration.
 *
 * @extends IAzAPIBaseProps Base properties including name, location, and tags.
 */
export interface SecurityinsightsCasesCommentsProps extends IAzAPIBaseProps {

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
